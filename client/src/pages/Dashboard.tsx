import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { useNotifications } from "@/hooks/use-notifications";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Bell,
  Send,
  ShieldCheck,
  CheckCircle2,
  Clock,
  FileText,
  Download,
  Plus,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const studentSidebarItems = [
  { id: "notifications", label: "Notification Center", icon: Bell },
  { id: "content", label: "Content Section", icon: FileText },
];

const adminSidebarItems = [
  { id: "send-notification", label: "Send Notification", icon: Send },
  { id: "sent-history", label: "Sent History", icon: Clock },
  { id: "upload-content", label: "Upload Content", icon: Plus },
];

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { user, isLoading, isAuthenticated, logoutMutation } = useAuth();
  const isAdmin = user?.role === "admin";
  const [activeSection, setActiveSection] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/auth");
    }
  }, [isLoading, isAuthenticated, setLocation]);

  useEffect(() => {
    if (user && !activeSection) {
      setActiveSection(isAdmin ? "send-notification" : "notifications");
    }
  }, [user, isAdmin, activeSection]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">{isLoading ? "Loading..." : "Redirecting..."}</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    setLocation("/");
  };

  const sidebarItems = isAdmin ? adminSidebarItems : studentSidebarItems;

  const renderContent = () => {
    switch (activeSection) {
      case "send-notification":
        return <AdminNotificationForm />;
      case "sent-history":
        return <SentNotificationHistory />;
      case "upload-content":
        return <AdminContentUpload />;
      case "notifications":
        return <NotificationCenter />;
      case "content":
        return <StudentContentSection />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card" data-testid="dashboard-sidebar">
        <div className="p-4 border-b border-border">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-0 bg-transparent transition-transform group-hover:scale-105">
              <img src="/images/logo.png" alt="Career Goal Academy Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base leading-none text-foreground whitespace-nowrap">
                Career Goal Academy
              </span>
              {isAdmin && (
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider mt-1">Admin Panel</span>
              )}
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-1" data-testid="dashboard-nav">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "flex items-center justify-start gap-3 w-full",
                activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              )}
              data-testid={`nav-${item.id}`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="p-3 border-t border-border">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="flex items-center justify-start gap-3 w-full text-muted-foreground"
            data-testid="button-sidebar-logout"
          >
            <LogOut className="w-4 h-4" />
            Log out
          </Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="flex items-center justify-between gap-4 px-6 h-16 border-b border-border bg-card" data-testid="dashboard-topbar">
          <div className="md:hidden">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Career Goal Academy Logo" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-sm text-foreground whitespace-nowrap">Career Goal Academy</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <h1 className="text-lg font-display font-semibold text-foreground">
              {isAdmin ? "Admin Panel" : "Student Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-foreground hidden sm:inline" data-testid="text-topbar-name">
              Hi, {user?.firstName}
            </span>
            <Avatar className="h-8 w-8">
              {user?.profilePicture && <AvatarImage src={user.profilePicture} />}
              <AvatarFallback className="text-xs bg-primary/10 text-primary">
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              data-testid="button-topbar-logout"
            >
              <LogOut className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </header>

        <div className="md:hidden flex border-b border-border bg-card overflow-x-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 text-xs font-medium whitespace-nowrap transition-colors relative",
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              data-testid={`mobile-nav-${item.id}`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        <main className="flex-1 overflow-y-auto p-6" data-testid="dashboard-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function AdminNotificationForm() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const sendMutation = useMutation({
    mutationFn: async (data: { title: string; message: string }) => {
      const res = await apiRequest("POST", "/api/notifications", data);
      return res.json();
    },
    onSuccess: () => {
      toast({ title: "Notification Sent", description: "All users have been notified." });
      setTitle("");
      setMessage("");
      queryClient.invalidateQueries({ queryKey: ["/api/admin/notifications"] });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message || "Failed to send notification", variant: "destructive" });
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) return;
    sendMutation.mutate({ title: title.trim(), message: message.trim() });
  };

  return (
    <div>
      <h2 className="text-xl font-display font-semibold text-foreground mb-2" data-testid="text-section-title">
        Send Notification
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        Send a notification to all registered users. They'll receive it in-app and as a browser push notification.
      </p>
      <Card className="max-w-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Title</label>
            <Input
              placeholder="e.g. New Batch Starting Soon!"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              data-testid="input-notification-title"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
            <Textarea
              placeholder="Write your notification message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              data-testid="input-notification-message"
            />
          </div>
          <Button
            type="submit"
            disabled={sendMutation.isPending || !title.trim() || !message.trim()}
            className="w-full"
            data-testid="button-send-notification"
          >
            {sendMutation.isPending ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send to All Users
              </>
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
}

function SentNotificationHistory() {
  const { data: sentNotifications = [], isLoading } = useQuery<any[]>({
    queryKey: ["/api/admin/notifications"],
  });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <h2 className="text-xl font-display font-semibold text-foreground mb-2" data-testid="text-section-title">
        Sent Notifications
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        History of all notifications you've sent to users.
      </p>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : sentNotifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
            <Bell className="w-10 h-10 text-muted-foreground" />
          </div>
          <p className="text-lg font-medium text-foreground mb-1">No notifications sent yet.</p>
          <p className="text-sm text-muted-foreground">Your sent notifications will appear here.</p>
        </div>
      ) : (
        <div className="space-y-3 max-w-xl">
          {sentNotifications.map((notif: any) => (
            <Card key={notif.id} className="p-4" data-testid={`sent-notification-${notif.id}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <h3 className="text-sm font-semibold text-foreground">{notif.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{notif.message}</p>
                </div>
                <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                  {formatDate(notif.createdAt)}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function AdminContentUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState("");
  const [uploadType, setUploadType] = useState<"file" | "url">("file");
  const { toast } = useToast();

  const uploadMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch("/api/content", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Upload failed");
      return res.json();
    },
    onSuccess: () => {
      toast({ title: "Content Uploaded", description: "Successfully uploaded to student dashboard." });
      setTitle("");
      setDescription("");
      setFile(null);
      setFileUrl("");
      queryClient.invalidateQueries({ queryKey: ["/api/content"] });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title) return;
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    
    if (uploadType === "file" && file) {
      formData.append("file", file);
    } else if (uploadType === "url" && fileUrl) {
      formData.append("fileUrl", fileUrl);
      formData.append("fileType", "link");
    } else {
      toast({ title: "Error", description: "Please provide a file or URL", variant: "destructive" });
      return;
    }

    uploadMutation.mutate(formData);
  };

  return (
    <div>
      <h2 className="text-xl font-display font-semibold text-foreground mb-6">Upload Content</h2>
      <Card className="max-w-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Class 10th Notes" required />
          </div>
          <div>
            <label className="text-sm font-medium">Description</label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Brief description..." />
          </div>
          
          <div className="flex gap-4 p-1 bg-muted rounded-lg">
            <Button 
              type="button" 
              variant={uploadType === "file" ? "default" : "ghost"} 
              className="flex-1"
              onClick={() => setUploadType("file")}
            >
              Direct File
            </Button>
            <Button 
              type="button" 
              variant={uploadType === "url" ? "default" : "ghost"} 
              className="flex-1"
              onClick={() => setUploadType("url")}
            >
              External Link
            </Button>
          </div>

          {uploadType === "file" ? (
            <div>
              <label className="text-sm font-medium">Select File (PDF/Image)</label>
              <Input 
                type="file" 
                onChange={(e) => setFile(e.target.files?.[0] || null)} 
                accept=".pdf,image/*"
                className="cursor-pointer"
              />
            </div>
          ) : (
            <div>
              <label className="text-sm font-medium">File URL</label>
              <Input value={fileUrl} onChange={(e) => setFileUrl(e.target.value)} placeholder="https://..." />
            </div>
          )}

          <Button type="submit" className="w-full" disabled={uploadMutation.isPending}>
            {uploadMutation.isPending ? "Uploading..." : "Upload Content"}
          </Button>
        </form>
      </Card>
    </div>
  );
}

function NotificationCenter() {
  const { data: notifications = [], isLoading } = useQuery<any[]>({
    queryKey: ["/api/notifications"],
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-display font-semibold text-foreground mb-6">Notification Center</h2>
      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : notifications.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">No notifications yet</div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notif) => (
            <div key={notif.id} className="bg-card p-4 rounded-2xl border border-border shadow-sm">
              <h3 className="font-bold text-primary mb-1">{notif.title}</h3>
              <p className="text-sm text-foreground mb-2">{notif.message}</p>
              <span className="text-[10px] text-muted-foreground">
                {new Date(notif.createdAt).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function StudentContentSection() {
  const { data: content = [], isLoading } = useQuery<any[]>({
    queryKey: ["/api/content"],
  });

  return (
    <div>
      <h2 className="text-xl font-display font-semibold text-foreground mb-6">Study Material & Content</h2>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-muted animate-pulse rounded-xl" />
          ))}
        </div>
      ) : content.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">No content available yet</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item) => (
            <Card key={item.id} className="p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {item.fileType === "pdf" ? (
                    <div className="p-2 bg-red-100 text-red-600 rounded-lg"><FileText className="w-5 h-5" /></div>
                  ) : (
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Download className="w-5 h-5" /></div>
                  )}
                  <h3 className="font-bold text-foreground line-clamp-1">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{item.description}</p>
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                <a href={item.fileUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" /> Download {item.fileType.toUpperCase()}
                </a>
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
