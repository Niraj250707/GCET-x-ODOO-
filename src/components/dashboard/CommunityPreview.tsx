import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      role: "HR Manager",
      avatar: "S",
    },
    content: "🎉 Welcome to our new team members joining this month! Looking forward to great things together.",
    likes: 24,
    comments: 8,
    time: "2h ago",
  },
  {
    id: 2,
    author: {
      name: "Mike Chen",
      role: "Engineering Lead",
      avatar: "M",
    },
    content: "Team lunch this Friday at 1 PM! Who's in? 🍕",
    likes: 18,
    comments: 12,
    time: "4h ago",
  },
];

export function CommunityPreview() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display font-semibold text-lg">Community Feed</h3>
          <p className="text-sm text-muted-foreground">Latest updates from your team</p>
        </div>
        <button className="text-sm text-primary font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 rounded-xl bg-secondary/50 space-y-3">
            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-semibold">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {post.author.role} · {post.time}
                  </p>
                </div>
              </div>
              <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Content */}
            <p className="text-sm">{post.content}</p>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-2 border-t border-border">
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Heart className="w-4 h-4" />
                {post.likes}
              </button>
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                {post.comments}
              </button>
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
