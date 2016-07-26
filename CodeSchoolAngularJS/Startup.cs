using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CodeSchoolAngularJS.Startup))]
namespace CodeSchoolAngularJS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
