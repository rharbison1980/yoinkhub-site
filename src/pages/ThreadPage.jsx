import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth, SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import { siteContent } from '../content/siteContent';

function timeAgo(dateStr) {
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString();
}

const categoryColors = {
  'Feature Request': 'bg-blue-100 text-blue-700',
  'Bug Report': 'bg-red-100 text-red-700',
  'Question': 'bg-amber-100 text-amber-700',
  'General Feedback': 'bg-emerald-100 text-emerald-700',
  'Roast Us': 'bg-purple-100 text-purple-700',
};

function renderMessage(text) {
  // Highlight @mentions
  return text.split(/(@[\w]+(?:\s[\w]+)?)/g).map((part, i) =>
    part.startsWith('@') ? (
      <span key={i} className="font-semibold text-primary">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function ThreadPage() {
  const { id } = useParams();
  const { communityPage } = siteContent;
  const { getToken } = useAuth();

  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState('');

  const fetchThread = async () => {
    try {
      const res = await fetch(`/api/threads/${id}`);
      if (res.status === 404) {
        setNotFound(true);
      } else if (res.ok) {
        const data = await res.json();
        setThread(data);
      }
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThread();
  }, [id]);

  const handleReply = async (e) => {
    e.preventDefault();
    if (!replyMessage.trim()) return;

    setPosting(true);
    setError('');

    try {
      const token = await getToken();
      const res = await fetch('/api/replies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ thread_id: id, message: replyMessage }),
      });

      if (res.ok) {
        setReplyMessage('');
        fetchThread();
      } else {
        const data = await res.json();
        setError(data.error || communityPage.errorMessage);
      }
    } catch {
      setError(communityPage.errorMessage);
    } finally {
      setPosting(false);
    }
  };

  const handleDeleteReply = async (replyId) => {
    const secret = window.prompt('Admin password:');
    if (!secret) return;

    try {
      const res = await fetch('/api/admin/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'reply', id: replyId, secret }),
      });
      if (res.ok) {
        fetchThread();
      } else {
        alert('Delete failed. Wrong password?');
      }
    } catch {
      alert('Delete failed.');
    }
  };

  const handleDeleteThread = async () => {
    const secret = window.prompt('Admin password:');
    if (!secret) return;

    try {
      const res = await fetch('/api/admin/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'thread', id: thread.id, secret }),
      });
      if (res.ok) {
        window.location.href = '/community';
      } else {
        alert('Delete failed. Wrong password?');
      }
    } catch {
      alert('Delete failed.');
    }
  };

  if (loading) {
    return (
      <div className="pt-32 pb-16 text-center text-gray-400">Loading thread...</div>
    );
  }

  if (notFound || !thread) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Thread not found</h2>
        <Link to="/community" className="text-primary font-medium hover:underline">
          &larr; Back to Community
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link to="/community" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary mb-6 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Community
        </Link>

        {/* Thread header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[thread.category] || 'bg-gray-100 text-gray-600'}`}>
              {thread.category}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            {thread.title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="font-medium text-gray-600">{thread.display_name}</span>
            <span>&middot;</span>
            <span>{timeAgo(thread.created_at)}</span>
          </div>
        </div>

        {/* Opening message */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 mb-2">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{renderMessage(thread.message)}</p>
        </div>

        {/* Admin delete thread */}
        <div className="flex justify-end mb-8">
          <button
            onClick={handleDeleteThread}
            className="inline-flex items-center gap-1 text-xs text-gray-300 hover:text-red-500 transition-colors"
            title="Admin: Delete thread"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete thread
          </button>
        </div>

        {/* Replies */}
        {thread.replies && thread.replies.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              {thread.replies.length} {thread.replies.length === 1 ? 'Reply' : 'Replies'}
            </h3>
            <div className="space-y-3">
              {thread.replies.map((reply) => (
                <div
                  key={reply.id}
                  className="bg-gray-50 rounded-lg p-5 border border-gray-100 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-700">{reply.display_name}</span>
                      <span className="text-gray-400">&middot;</span>
                      <span className="text-gray-400">{timeAgo(reply.created_at)}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteReply(reply.id)}
                      className="opacity-0 group-hover:opacity-100 inline-flex items-center gap-1 text-xs text-gray-300 hover:text-red-500 transition-all"
                      title="Admin: Delete reply"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{renderMessage(reply.message)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reply form */}
        <div className="border-t border-gray-100 pt-6">
          <SignedIn>
            <form onSubmit={handleReply}>
              <textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder={communityPage.replyForm.placeholder}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm resize-none mb-3"
              />
              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
              <button
                type="submit"
                disabled={posting || !replyMessage.trim()}
                className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {posting ? (
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  communityPage.replyForm.cta
                )}
              </button>
            </form>
          </SignedIn>
          <SignedOut>
            <div className="text-center py-8 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-gray-500 mb-3">{communityPage.replyForm.signInPrompt}</p>
              <SignInButton mode="modal">
                <button className="btn-sm bg-primary text-white hover:bg-primary-dark shadow-orange">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </section>
  );
}

export default ThreadPage;
