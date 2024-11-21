<template>
  <div>
    <ProjectCard
      v-if="currentIndex === 1"
      url="backup"
      description="Automated backup and recovery of important files across the entire disk"
      image="backup.webp"
      :badges="true"
      package="backupmaster"
    />
    <ProjectCard
      v-if="currentIndex === 2"
      url="canvasdl"
      description="Cli tool to simplify academic life by automating tasks like downloading course material, checking updates, and managing deadlines"
      image="canvasdl.webp"
      :badges="true"
    />
    <ProjectCard
      v-if="currentIndex === 3"
      url="music"
      description="Application to analyze and manage favorite music and artists"
      image="https://raw.githubusercontent.com/quintenroets/music/main/assets/examples/artists.png"
      :badges="true"
      package="musicmaster"
    />
    <ProjectCard
      v-if="currentIndex === 4"
      url="revnets"
      description="Experiments to reconstruct internal parameters of black box neural networks"
      image="revnets.webp"
    />
    <ProjectCard
      v-if="currentIndex === 5"
      url="chat"
      description="CLI for local LLM assistant"
      image="https://raw.githubusercontent.com/quintenroets/chat/main/assets/examples/example.png"
      :badges="true"
      package="powerchat-cli"
    />
    <ProjectCard
      v-if="currentIndex === 6"
      url="corona"
      description="Visualization tool for current Covid pandemic situation in Belgium"
      image="https://raw.githubusercontent.com/quintenroets/corona/main/examples/out.png"
    />
    <ProjectCard
      v-if="currentIndex === 7"
      url="actions"
      description="GitHub actions for CI/CD"
      image="https://raw.githubusercontent.com/quintenroets/actions/main/assets/examples/workflow.png"
    />
    <ProjectCard
      v-if="currentIndex === 8"
      url="sysetup"
      description="Automated personal system setup for new Linux installations, including apps, shortcuts, and settings"
      image="sysetup.webp"
    />
    <ProjectCard
      v-if="currentIndex === 9"
      url="portfolio"
      description="Portfolio webapp"
      image="portfolio.webp"
    />
    <ProjectCard
      v-if="currentIndex === 10"
      url="python-package-template"
      description="Repository to automate the maintenance of Python projects. Custom CI scripts instantiate new
      projects and propagate all changes in this repository to derived project
      with pull requests."
      image="template.webp"
    />
    <ProjectCard
      v-if="currentIndex === 11"
      url="superpathlib"
      description=""
      :badges="true"
    >
      <div class="text-left">
        Maximize your productivity with minimal code! <br />
        <br />
        Superpathlib is an enhanced version of Python's standard pathlib,
        designed to make file operations more intuitive and extend functionality
        without compromising performance. It builds on pathlib by introducing
        additional properties, methods, and shortcuts that simplify common file
        manipulations and reduce boilerplate code.
        <br />
        <br />
        For custom operations, the package supports subclassing, which has been
        added to the standard library in python3.12.
      </div>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 12"
      url="cli"
      description="High-level interface for interactions with the command-line and external processes"
      :badges="true"
      package="powercli"
    >
      <br />
      <br />
      <pre class="text-left" v-html="cliCode"></pre>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 13"
      url="persistent-cache"
      description="Persistent cache for expensive function calls"
      :badges="true"
      package="persistent-function-cache"
    >
      <div class="text-left">
        <br />
        The cache key for a function call depends on the function's:
        <div class="ml-4">
          <ul>
            <li>signature</li>
            <li>implementation</li>
            <li>argument values</li>
          </ul>
        </div>
        Custom cache key transformations and reductions can be specified.
        <br />
        <br />
        <pre class="text-left" v-html="cacherCode"></pre>
      </div>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 14"
      url="downloader"
      description="Package to download files in a script as if they were downloaded from a browser"
      :badges="true"
      package="fire-downloader"
    >
      <div class="text-left">
        Features:
        <ul class="ml-4">
          <li>Retries after error</li>
          <li>Resumes from partial download after error</li>
          <li>Shows progressbar during download</li>
          <li>Downloads multiple urls in parallel</li>
          <li>
            Only downloads when the destination does not exist yet or when the
            server indicates a newer version
          </li>
          <li>Custom callback on progress update can be specified</li>
        </ul>
      </div>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 15"
      url="powertrace"
      description="Package for detailed stack trace logging and visualization"
      :badges="true"
      image="powertrace.webp"
    >
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 16"
      url="package-dev-tools"
      description="CI/CD tools for Python packages"
      :badges="true"
    >
      <div class="text-left">
        <br />
        This project contains scripts and provides pre-commit hooks for:
        <ul class="ml-4">
          <li>automatically adding type annotations</li>
          <li>updating project badges</li>
          <li>bumping package versions</li>
          <li>checking test coverage</li>
          <li>instantiating new projects</li>
          <li>extracting supported Python versions</li>
          <li>..</li>
        </ul>
        <br />
      </div>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 17"
      url="package-utils"
      description="Generic utilities for Python packages"
      :badges="true"
    >
      <div class="text-left">
        <br />
        <ul class="ml-4">
          <li>
            creating cli entry points for function with dataclass arguments,
            with the dataclass fields configurable from the cli
          </li>
          <li>
            generic context object for managing options, config values and
            secrets, configurable from the cli and with config files
          </li>
          <li>dataclass serialization functionality</li>
          <li>cached file content properties and decorators</li>
          <li>..</li>
        </ul>
      </div>
    </ProjectCard>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import "prismjs/components/prism-python";

export default {
  props: {
    currentIndex: Number,
  },
  components: {
    ProjectCard,
  },
  computed: {
    cliCode() {
      let code =
        "import cli\n\n" +
        'cli.launch("chromium")\n\n' +
        'items = cli.capture_output("ls")\n' +
        "for item in cli.track_progress(items):\n" +
        '\tif cli.confirm(f"Delete {item}?"):\n' +
        '\t\tprint("deleting..")';
      return Prism.highlight(code, Prism.languages.python, "python");
    },
    cacherCode() {
      let code =
        "from persistent_cache import cache\n\n" +
        "@cache\n" +
        "def expensive_function(..):\n" +
        "\t..\n";
      return Prism.highlight(code, Prism.languages.python, "python");
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: disc;
}
</style>
