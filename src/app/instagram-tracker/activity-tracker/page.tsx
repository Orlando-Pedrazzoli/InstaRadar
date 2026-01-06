import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { User, Heart, MessageCircle, UserPlus, UserMinus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: 'Instagram Activity Tracker | Live Activity Feed | InstaRadar',
  description: 'See follows, unfollows, likes and comments in real-time. Monitor any public Instagram account activity anonymously.',
};

const mockActivities = [
  { id: 1, type: 'follow', target: '@fashion_daily', time: '2 hours ago', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop' },
  { id: 2, type: 'like', target: 'Post by @travel_pics', time: '3 hours ago', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop' },
  { id: 3, type: 'unfollow', target: '@old_friend', time: '5 hours ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop' },
  { id: 4, type: 'comment', target: 'Post by @foodie', time: '6 hours ago', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop' },
  { id: 5, type: 'like', target: 'Post by @art_gallery', time: '8 hours ago', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop' },
];

const ActivityIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'follow': return <UserPlus className="h-4 w-4 text-green-500" />;
    case 'unfollow': return <UserMinus className="h-4 w-4 text-red-500" />;
    case 'like': return <Heart className="h-4 w-4 text-pink-500 fill-pink-500" />;
    case 'comment': return <MessageCircle className="h-4 w-4 text-blue-500" />;
    default: return <Clock className="h-4 w-4 text-zinc-500" />;
  }
};

export default function ActivityTrackerPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Activity Tracker"
        subtitle="See follows, unfollows, likes and comments in real-time. Enter a username to view their latest public actions."
      >
        <SearchBox placeholder="Enter username to see activity..." buttonText="View Feed" />
      </PageHero>

      <section className="py-12 bg-[#08080c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Activity Feed
            </h2>
            <div className="flex gap-2">
              {['All', 'Follows', 'Likes'].map(filter => (
                <Button key={filter} variant="outline" size="sm" className="rounded-full text-xs h-8 border-white/5 hover:bg-white/5">
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {mockActivities.map((activity) => (
              <div key={activity.id} className="glass-card p-4 rounded-2xl flex items-center justify-between group hover:border-primary/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={activity.avatar} alt="" className="w-12 h-12 rounded-full object-cover border border-white/10" />
                    <div className="absolute -bottom-1 -right-1 bg-[#12121a] p-1 rounded-full border border-white/10">
                      <ActivityIcon type={activity.type} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      <span className="text-zinc-400 capitalize">{activity.type}ed</span> {activity.target}
                    </p>
                    <p className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-primary text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  View Source
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl border border-dashed border-white/10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3">Want to see more?</h3>
              <p className="text-zinc-400 mb-6 max-w-sm mx-auto">
                Upgrade to a Pro plan to unlock historical activity data and real-time alerts.
              </p>
              <Button className="bg-gradient-primary">
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
