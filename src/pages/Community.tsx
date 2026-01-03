import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Heart, MessageCircle, Share2, MoreHorizontal, Image, Send, Users, Briefcase, Code } from "lucide-react";

const tabs = [
  { id: "all", label: "All", icon: Users },
  { id: "hr", label: "HR", icon: Briefcase },
  { id: "tech", label: "Tech", icon: Code },
];

const posts = [
  {
    id: 1,
    author: { name: "Sarah Johnson", role: "HR Manager", avatar: "S", color: "gradient-primary" },
    content: "🎉 Welcome to our new team members joining this month! Looking forward to great things together. Please make sure to complete your onboarding checklist.",
    likes: 24,
    comments: 8,
    time: "2h ago",
    community: "hr",
    liked: false,
  },
  {
    id: 2,
    author: { name: "Mike Chen", role: "Engineering Lead", avatar: "M", color: "gradient-success" },
    content: "Team lunch this Friday at 1 PM! 🍕 Who's in? Drop a comment below if you're joining.",
    likes: 18,
    comments: 12,
    time: "4h ago",
    community: "tech",
    liked: true,
  },
  {
    id: 3,
    author: { name: "Priya Sharma", role: "Product Designer", avatar: "P", color: "gradient-warning" },
    content: "Just shipped the new dashboard design! 🎨 Check it out and let me know your thoughts. Feedback is always welcome!",
    image: true,
    likes: 42,
    comments: 15,
    time: "6h ago",
    community: "tech",
    liked: false,
  },
  {
    id: 4,
    author: { name: "HR Team", role: "Official", avatar: "HR", color: "gradient-purple" },
    content: "📢 Reminder: January 26th is a public holiday (Republic Day). Office will remain closed. Enjoy the long weekend!",
    likes: 56,
    comments: 4,
    time: "1d ago",
    community: "hr",
    liked: true,
  },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState("all");
  const [newPost, setNewPost] = useState("");
  const [localPosts, setLocalPosts] = useState(posts);

  const filteredPosts = activeTab === "all" 
    ? localPosts 
    : localPosts.filter(p => p.community === activeTab);

  const handleLike = (postId: number) => {
    setLocalPosts(posts => posts.map(p => 
      p.id === postId 
        ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
        : p
    ));
  };

  const handlePost = () => {
    if (!newPost.trim()) return;
    
    const post = {
      id: Date.now(),
      author: { name: "Ravi Kumar", role: "Employee", avatar: "R", color: "gradient-primary" },
      content: newPost,
      likes: 0,
      comments: 0,
      time: "Just now",
      community: "all",
      liked: false,
    };
    
    setLocalPosts([post, ...localPosts]);
    setNewPost("");
  };

  return (
    <Layout userName="Ravi Kumar">
      <div className="container py-6 px-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-display font-bold">Community</h1>
          <p className="text-muted-foreground">Connect with your colleagues</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "gradient-primary text-white shadow-glow"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Create Post */}
        <div className="glass-card rounded-2xl p-4">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-semibold flex-shrink-0">
              R
            </div>
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full bg-transparent border-none outline-none resize-none text-sm"
                rows={2}
              />
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Image className="w-5 h-5" />
                  Photo
                </button>
                <button
                  onClick={handlePost}
                  disabled={!newPost.trim()}
                  className="btn-primary py-2 px-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {filteredPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="glass-card rounded-2xl p-5 space-y-4 animate-slide-in-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${post.author.color} flex items-center justify-center text-white font-semibold`}>
                    {post.author.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {post.author.role} · {post.time}
                    </p>
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                  <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <p className="text-sm leading-relaxed">{post.content}</p>

              {/* Image Placeholder */}
              {post.image && (
                <div className="w-full h-48 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <Image className="w-12 h-12 text-muted-foreground" />
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-6 pt-3 border-t border-border">
                <button 
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    post.liked ? "text-destructive" : "text-muted-foreground hover:text-destructive"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${post.liked ? "fill-current" : ""}`} />
                  {post.likes}
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  {post.comments}
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
