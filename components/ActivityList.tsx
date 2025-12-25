"use client"

import ActivityItem from "./ActivityItem";
import { useActivities } from "@/hooks/useActivities";

type Props = {
    owner: string;
    repoName: string;
};

export default function ActivityList({owner, repoName} : Props) {
  
    const { activities, loading } = useActivities(owner, repoName);

    return (
    <div className="space-y-6">
      {loading && <p className="text-gray-400">Loading...</p>}

      {!loading && <ul className="space-y-4">
            {activities.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity}/>
                ))}
                {activities.length === 0 && <p>No recent activity found.</p>}
              </ul>}
    </div>
  );
}
