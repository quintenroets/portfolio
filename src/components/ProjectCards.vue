<template>
  <div>
    <ProjectCard
      v-if="currentIndex === 1"
      url="backup"
      image="backup.webp"
      :badges="true"
      package="backupmaster"
    >
      Automated backup and recovery of important files across the entire disk
      <ul class="ml-4">
        <li>
          git-like interface for backing up files where version control is not
          required/feasible
        </li>
        <li>
          supports 70+ different cloud providers by leveraging
          <ExternalLink href="https://rclone.org/">Rclone</ExternalLink>
        </li>
        <li>easy configuration for files/directories to include/ignore</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 2"
      url="canvasdl"
      image="canvasdl.webp"
      :badges="true"
      image-height="max-h-60"
    >
      Cli tool to simplify academic life
      <ul class="ml-4 mb-1">
        <li>
          synchronizes all content from different platforms like Canvas, Edstem,
          Piazza, and Gradescope to local files in unified format
        </li>
        <li>saves all deadlines to Google Calendar</li>
        <li>
          supports 3,482 different universities by leveraging the Canvas API
        </li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 3"
      url="music"
      image="music.webp"
      :badges="true"
      package="musicmaster"
      image-height="max-h-60"
    >
      Application to manage favorite music and artists
      <ul class="ml-4 mb-1">
        <li>responsive webapp built with Vue framework</li>
        <li>stores configurable artist and music preferences</li>
        <li>
          leverages Spotify's API to recommend new content based on stored
          preferences
        </li>
        <li>notifies user of new releases from favorite artists</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 4"
      url="revnets"
      image="revnets.webp"
      image-height="max-h-36"
    >
      Internal parameter reconstruction of black box neural networks
      <ul class="ml-4 mb-1">
        <li>
          all experiments used in the paper
          <ExternalLink href="https://arxiv.org/abs/2409.19138"
            >Sequencing the Neurome</ExternalLink
          >
        </li>
        <li>
          reconstructs target networks with up to 1.5 million samples and up to
          7 layers deep by using advanced query sampling techniques to train
          surrogate models on the outputs of the target network
        </li>
        <li>
          configurable experiments implemented in Pytorch Lightning with over
          1000 variations in architectures, reconstruction algorithms and
          optimization criteria
        </li>
        <li>379 tests that verify all algorithms behave correctly</li>
        <li>
          optimized methods for measuring the similarity between two neural
          networks
        </li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 5"
      url="chat"
      image="https://raw.githubusercontent.com/quintenroets/chat/main/assets/examples/example.png"
      :badges="true"
      package="powerchat-cli"
    >
      CLI for local and private LLM assistant
      <ul class="ml-4 mb-1">
        <li>
          operates entirely offline by using LangChain integration with Ollama
          models
        </li>
        <li>saves conversation history to local files</li>
        <li>supports configurable model versions and sizes</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 6"
      url="corona"
      image="https://raw.githubusercontent.com/quintenroets/corona/main/examples/out.png"
      image-height="max-h-60"
    >
      Visualization tool for current Covid pandemic situation in Belgium
      <ul class="ml-4 mb-1">
        <li>
          visualizes pandemic situation precisely by using matplotlib to display
          exponential trends on a logarithmic scale
        </li>
        <li>uses official statistics reported by Sciensano</li>
        <li>supports customizable start date and filtering by provinces</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 7"
      url="actions"
      image="https://raw.githubusercontent.com/quintenroets/actions/main/assets/examples/workflow.png"
    >
      modular and composable GitHub actions for CI/CD
      <ul class="ml-4 mb-1">
        <li>running tests</li>
        <li>running code quality checks</li>
        <li>building releases and publishing packages</li>
        <li>syncing changes across different repositories</li>
      </ul>
    </ProjectCard>
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
import ExternalLink from "@/components/externalLink.vue";

export default {
  props: {
    currentIndex: Number,
  },
  components: {
    ExternalLink,
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
