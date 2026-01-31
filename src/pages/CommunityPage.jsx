import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useUser, SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react';
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

function CommunityPage() {
  const { communityPage } = siteContent;
  const { getToken } = useAuth();
  const { user } = useUser();

  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: communityPage.categories[0],
    message: '',
  });
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState('');

  const fetchThreads = async (category) => {
    try {
      const params = category && category !== 'All' ? `?category=${encodeURIComponent(category)}` : '';
      const res = await fetch(`/api/threads${params}`);
      if (res.ok) {
        const data = await res.json();
        setThreads(data);
      }
    } catch {
      // Silently fail on fetch
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThreads(activeCategory);
  }, [activeCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPosting(true);
    setError('');

    try {
      const token = await getToken();
      const res = await fetch('/api/threads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ title: '', category: communityPage.categories[0], message: '' });
        setShowForm(false);
        fetchThreads(activeCategory);
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

  const handleDelete = async (threadId) => {
    const secret = window.prompt('Admin password:');
    if (!secret) return;

    try {
      const res = await fetch('/api/admin/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'thread', id: threadId, secret }),
      });
      if (res.ok) {
        fetchThreads(activeCategory);
      } else {
        alert('Delete failed. Wrong password?');
      }
    } catch {
      alert('Delete failed.');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-light via-white to-white pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-8 md:pt-44 md:pb-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter mb-6"
                data-aos="zoom-y-out"
              >
                {communityPage.hero.headline}
              </h1>
              <p
                className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto"
                data-aos="zoom-y-out"
                data-aos-delay="50"
              >
                {communityPage.hero.subheadline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Forum */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Category tabs + Start Thread */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {['All', ...communityPage.categories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <SignedIn>
              <button
                onClick={() => setShowForm(!showForm)}
                className="btn-sm bg-primary text-white hover:bg-primary-dark shadow-orange flex-shrink-0"
              >
                {showForm ? 'Cancel' : '+ Start a Thread'}
              </button>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn-sm bg-primary text-white hover:bg-primary-dark shadow-orange flex-shrink-0">
                  Sign In to Post
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* New Thread Form */}
          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-8"
            >
              <h3 className="text-lg font-bold mb-4">{communityPage.threadForm.heading}</h3>

              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder={communityPage.threadForm.titlePlaceholder}
                required
                maxLength={200}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm mb-4"
              />

              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm bg-white mb-4"
              >
                {communityPage.categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={communityPage.threadForm.messagePlaceholder}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm resize-none mb-4"
              />

              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

              <button
                type="submit"
                disabled={posting}
                className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {posting ? (
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  communityPage.threadForm.cta
                )}
              </button>
            </form>
          )}

          {/* Thread List */}
          {loading ? (
            <div className="text-center py-12 text-gray-400">Loading threads...</div>
          ) : threads.length === 0 ? (
            <div className="text-center py-12 text-gray-400">{communityPage.emptyState}</div>
          ) : (
            <div className="space-y-4">
              {threads.map((thread) => (
                <Link
                  key={thread.id}
                  to={`/community/thread/${thread.id}`}
                  className="block bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Category + reply count */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[thread.category] || 'bg-gray-100 text-gray-600'}`}>
                          {thread.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {thread.reply_count || 0} {thread.reply_count == 1 ? 'reply' : 'replies'}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors mb-1 truncate">
                        {thread.title}
                      </h3>

                      {/* Preview */}
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {thread.message}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                        <span className="font-medium text-gray-600">{thread.display_name}</span>
                        <span>&middot;</span>
                        <span>{timeAgo(thread.created_at)}</span>
                        {thread.last_activity && thread.last_activity !== thread.created_at && (
                          <>
                            <span>&middot;</span>
                            <span>Last reply {timeAgo(thread.last_activity)}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Admin delete (stop propagation so Link doesn't fire) */}
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleDelete(thread.id); }}
                    className="hidden group-hover:inline-flex items-center gap-1 text-xs text-gray-300 hover:text-red-500 mt-2 transition-colors"
                    title="Admin: Delete thread"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default CommunityPage;
