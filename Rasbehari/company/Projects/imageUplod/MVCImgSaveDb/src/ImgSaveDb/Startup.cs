using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ImgSaveDb.Startup))]
namespace ImgSaveDb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
