self.addEventListener("push", function (event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "Career Goal Academy";
  const options = {
    body: data.body || "You have a new notification",
    icon: "/images/logo.png",
    badge: "/images/logo.png",
    vibrate: [200, 100, 200],
    data: { url: "/" },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url || "/"));
});
