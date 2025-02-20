import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", seekers: 400, providers: 240 },
  { month: "Feb", seekers: 300, providers: 139 },
  { month: "Mar", seekers: 200, providers: 980 },
  { month: "Apr", seekers: 278, providers: 390 },
  { month: "May", seekers: 189, providers: 480 },
  { month: "Jun", seekers: 239, providers: 380 },
];

export default function JobDashboard() {
  return (
    <div className="flex justify-center items-center p-6">
      <Card className=" ">
        <CardHeader>
          <CardTitle className="text-center">
            Job Seekers vs Job Providers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="seekers"
                stroke="#4f46e5"
                strokeWidth={3}
                name="Job Seekers"
              />
              <Line
                type="monotone"
                dataKey="providers"
                stroke="#22c55e"
                strokeWidth={3}
                name="Job Providers"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
