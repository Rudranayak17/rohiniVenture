import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Mail, Phone, User, Calendar, Shield } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/redux/reducer/auth";

const ProfilePage = () => {
  const { username, email, phone, role, createdAt, updatedAt, _id, emailVerified } = useSelector(selectCurrentUser);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile Overview</h1>
          <p className="text-gray-500 mt-2">Manage your account information and settings</p>
        </header>

        <div className="grid gap-6">
          <Card>
            <CardHeader className="pb-4 flex justify-between items-center">
              <CardTitle className="text-2xl font-bold">Personal Information</CardTitle>
              <Badge variant="secondary" className="text-sm">{role === "jobSeeker" ? "Job Seeker" : role}</Badge>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <UserInfo icon={User} label="Username" value={username} />
              <UserInfo icon={Mail} label="Email" value={email}>
                <Badge variant="outline" className="mt-1 text-xs">
                  {emailVerified ? "Verified" : "Not Verified"}
                </Badge>
              </UserInfo>
              <UserInfo icon={Phone} label="Phone" value={phone} />
              <UserInfo icon={Calendar} label="Created At" value={formatDate(createdAt)} />
              <UserInfo icon={Clock} label="Last Updated" value={formatDate(updatedAt)} />
              <UserInfo icon={Shield} label="Account ID" value={_id} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Security Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <SecurityItem title="Two-Factor Authentication" description="Add an extra layer of security to your account" badgeText="Not Enabled" />
              <SecurityItem title="Password" description="Last changed 30 days ago" linkText="Change Password" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const UserInfo = ({ icon: Icon, label, value, children }) => (
  <div className="flex items-center space-x-3">
    <Icon className="h-5 w-5 text-gray-500" />
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
      {children}
    </div>
  </div>
);

const SecurityItem = ({ title, description, badgeText, linkText }) => (
  <div className="flex items-center justify-between py-2">
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    {badgeText ? (
      <Badge variant="outline">{badgeText}</Badge>
    ) : (
      <button className="text-sm text-blue-600 hover:text-blue-800">{linkText}</button>
    )}
  </div>
);

export default ProfilePage;