using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HD_POC.WebNotifications.Hubs
{
    public class PollHub : Hub
    {
        public static void FetchPoll()
        {
            IHubContext context = GlobalHost.ConnectionManager.GetHubContext<PollHub>();
            context.Clients.All.displayPoll();
        }
    }
}
