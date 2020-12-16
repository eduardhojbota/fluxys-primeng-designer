#tool nuget:?package=GitVersion.CommandLine&version=5.3.7
#tool "nuget:?package=NUnit.ConsoleRunner&version=3.8.0"
#addin Fluxys.Cake.BuildSupport&loaddependencies&prerelease&version=2.0.0

//////////////////////////////////////////////////////////////////////
// ARGUMENTS
//////////////////////////////////////////////////////////////////////

var target = Argument("target", "Default");
var configuration = Argument("configuration", "Release");

//////////////////////////////////////////////////////////////////////
///    Build Variables
/////////////////////////////////////////////////////////////////////

var testsSuccesFull = true;

var outputDir = Argument("outputDir", "./Output");
var versionInfo = Argument("versionInfo", "");
var businesSystem = Argument("businesSystem", "primeng-designer");
var component = Argument("component", "WEB");

var targetDir = "";

//////////////////////////////////////////////////////////////////////
// Settings object
//////////////////////////////////////////////////////////////////////

var settings = new FluxysFrontendBuildSettings{
	BusinessSystem = businesSystem,
    Component=component,
    OutputDir = outputDir,
	ShouldCopytoBuildOutput = false,
	ShouldCopyToLatestStable = true,
	ShouldCopyToLatest = true,
    PackageSettings = new FluxysPackageSettings()
        {
            FolderToPackage = "dist",
            SourcesLocation = "**/*",
        }
};


//////////////////////////////////////////////////////////////////////
// TASK TARGETS
//////////////////////////////////////////////////////////////////////

Task("Default").Does(()=> {
     settings = FlxFrontEndDefaultBuild(settings);
  	});








//////////////////////////////////////////////////////////////////////
// EXECUTION
//////////////////////////////////////////////////////////////////////

RunTarget(target);


