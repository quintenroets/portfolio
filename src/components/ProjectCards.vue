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
        <li>responsive webapp built with Vue.js</li>
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
    <ProjectCard v-if="currentIndex === 8" url="sysetup" image="sysetup.webp">
      Automated personal system setup for new Linux installations
      <ul class="ml-4 mb-1">
        <li>works out of the box with simple shell command</li>
        <li>
          retrieves appropriate files, settings and environment configurations
          using backupmaster
        </li>
        <li>
          secures personal data with encrypted files and private cloud storage
        </li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 9"
      url="portfolio"
      image="portfolio.webp"
    >
      Personal portfolio webapp
      <ul class="ml-4 mb-1">
        <li>
          summarizes professional experience with interactive, single-page
          application
        </li>
        <li>designed with Vue.js</li>
        <li>deployed and hosted using Netlify</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 10"
      url="python-package-template"
      image="template.webp"
    >
      Template repository
      <ul class="ml-4 mb-1">
        <li>automates the setup and maintenance of Python projects</li>
        <li>
          Custom CI scripts instantiate new projects and propagate all changes
          in the template repository to derived projects with pull requests.
        </li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 11"
      url="superpathlib"
      description=""
      :badges="true"
    >
      Enhanced pathlib library for advanced file operations
      <ul class="ml-4 mb-1">
        <li>extends Python's standard library pathlib</li>
        <li>
          introduces properties for accessing file content in different formats
          like text, bytes, yaml, json or numpy
        </li>
        <li>
          provides properties for setting or accessing file metadata like last
          modified time, content hash, filesize or custom tags
        </li>
        <li>
          exposes common methods like extracting archives, finding files by
          custom conditions, creating paths from uris, ..
        </li>
        <li>
          supports subclassing for custom operations, which has been added to
          the standard library in python3.12
        </li>
        <br />
        <pre class="text-sm" v-html="superpathlibCode"></pre>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 12"
      url="cli"
      :badges="true"
      package="powercli"
    >
      High-level interface for command-line interactions and external processes
      <ul class="ml-4 mb-1">
        <li>
          introduces high-level functions for launching/ capturing results from
          external commands by leveraging Python's subprocess library
        </li>
        <li>
          parses wide variety of input arguments into cli-compatible strings
        </li>
        <li>
          offers methods to ask user inputs or visualize progress by using the
          Rich library
        </li>
        <br />
        <pre class="text-sm" v-html="cliCode"></pre>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 13"
      url="persistent-cache"
      :badges="true"
      package="persistent-function-cache"
    >
      Persistent cache for expensive function calls
      <ul class="ml-4 mb-1">
        <li>
          enabled by pickling results to files and applying deterministic hash
          functions
        </li>
        <li>
          avoids stale results by computing the cache key based on a function's
          <div class="ml-4">
            <ul>
              <li>argument values</li>
              <li>signature</li>
              <li>implementation</li>
            </ul>
          </div>
        </li>
        <li>supports function arguments of any complex data type</li>
        <li>allows custom cache key transformations and reductions</li>
        <br />
        <pre class="text-sm" v-html="cacherCode"></pre>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 14"
      url="downloader"
      :badges="true"
      package="fire-downloader"
      image="downloader.png"
    >
      Download files in a script as if they were downloaded from a browser
      <div class="text-left">
        <ul class="ml-4">
          <li>shows progressbar during download</li>
          <li>downloads multiple urls in parallel</li>
          <li>retries and resumes from partial download after error</li>
          <li>
            saves downloads and skips re-downloading unless the server indicates
            an update
          </li>
          <li>supports custom callbacks on progress updates</li>
        </ul>
      </div>
      <br />
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 15"
      url="powertrace"
      :badges="true"
      image="powertrace.webp"
    >
      Package for detailed stack trace logging and visualization
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 16"
      url="package-dev-tools"
      :badges="true"
    >
      CI/CD tools for Python packages
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
    <ProjectCard v-if="currentIndex === 17" url="package-utils" :badges="true">
      Generic utilities for Python packages
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
    superpathlibCode() {
      let code =
        "path.json = {key: value}\n" +
        "\n" +
        "with Path.tempfile() as tmp:\n" +
        "    do_work(logfile=tmp)\n";
      return Prism.highlight(code, Prism.languages.python, "python");
    },
    cliCode() {
      let code =
        'cli.launch("chromium")' +
        "\n\n" +
        'items = cli.capture_output("ls")\n' +
        "for item in cli.track_progress(items):\n" +
        '\tif cli.confirm(f"Delete {item}?"):\n' +
        '\t\tprint("deleting..")' +
        "\n\n" +
        'options = {"l": "username", "p": 22}\n' +
        'cli.run("ssh", options, "localhost") ';
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
