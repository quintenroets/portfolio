<template>
  <div>
    <ProjectCard
      v-if="currentIndex === 1"
      url="backup"
      image="backup.webp"
      :badges="true"
      package="backupmaster"
      title="Automated backup and recovery of important files across the entire disk"
    >
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
      title="Cli tool to simplify academic life"
    >
      <ul class="ml-4 mb-1">
        <li>
          synchronizes all content from different platforms like Canvas, Edstem,
          Piazza, and Gradescope to local files in unified format
        </li>
        <li>saves all deadlines to Google Calendar</li>
        <li>supports 3,482 different universities by using the Canvas API</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 3"
      url="music"
      image="music.webp"
      :badges="true"
      package="musicmaster"
      image-height="max-h-60"
      title="Application to manage favorite music and artists"
    >
      <ul class="ml-4 mb-1">
        <li>responsive webapp built with Vue.js</li>
        <li>stores artist and music preferences</li>
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
      title="Internal parameter reconstruction of black box neural networks"
    >
      <ul class="ml-4 mb-1">
        <li>
          experiments used in the paper
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
      title="CLI for local and private LLM assistant"
    >
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
      title="Visualization tool for Covid pandemic situation in Belgium"
    >
      <ul class="ml-4 mb-1">
        <li>
          clearly visualizes pandemic by using matplotlib to display exponential
          trends on a logarithmic scale
        </li>
        <li>uses official statistics reported by Sciensano</li>
        <li>supports customizable start date and filtering by provinces</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 7"
      url="actions"
      image="https://raw.githubusercontent.com/quintenroets/actions/main/assets/examples/workflow.png"
      title="modular and composable GitHub actions for CI/CD"
    >
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
      image="sysetup.webp"
      title="Automated personal system setup for Linux installations"
    >
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
      title="Personal portfolio webapp"
    >
      <ul class="ml-4 mb-1">
        <li>
          interactive, single-page application for presenting professional
          experience
        </li>
        <li>deployed and hosted using Netlify</li>
        <li>designed with Vue.js</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 10"
      url="python-package-template"
      image="template.webp"
      title="Template repository"
    >
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
      title="Enhanced pathlib library for advanced file operations"
      :code="superpathlibCode"
    >
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
          custom conditions or creating paths from uris
        </li>
        <li>
          supports subclassing for custom operations, which has been added to
          the standard library in python3.12
        </li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 12"
      url="cli"
      :badges="true"
      package="powercli"
      title="High-level interface for command-line interactions"
      :code="cliCode"
    >
      <ul class="ml-4 mb-1">
        <li>
          introduces high-level functions for launching/ capturing results from
          external processes by leveraging Python's subprocess library
        </li>
        <li>
          parses wide variety of input arguments into cli-compatible strings
        </li>
        <li>
          offers methods for user interaction like asking for input or
          visualizing progress by the Rich library
        </li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 13"
      url="persistent-cache"
      :badges="true"
      package="persistent-function-cache"
      title="Persistent cache for expensive function calls"
      :code="cacherCode"
    >
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
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 14"
      url="downloader"
      :badges="true"
      package="fire-downloader"
      image="downloader.webp"
      title="Advanced file downloader"
    >
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
      title="Detailed stack trace logging and visualization"
    >
      <ul class="ml-4">
        <li>displays entire stack trace in interactive, colorful format</li>
        <li>includes snapshot of local variables</li>
        <li>saves most recent stack trace to log file</li>
        <li>supports headless scripts</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 16"
      url="package-dev-tools"
      :badges="true"
      title="Development tools for Python packages"
      image="package_dev_tools.png"
      image-height="max-h-60"
    >
      <ul class="ml-4">
        <li>
          provides code automation tools like adding type annotations or
          instantiating new projects from a template
        </li>
        <li>
          exposes CI tools for checking test coverage, bumping package versions
          and updating project badges
        </li>
        <li>can be installed as pre-commit hooks</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      v-if="currentIndex === 17"
      url="package-utils"
      :badges="true"
      title="Generic utilities for Python packages"
      :code="packageUtilsCode"
    >
      <ul class="ml-4">
        <li>
          creating entry points from functions with a class as argument,
          exposing the fields as cli parameters
        </li>
        <li>
          context objects for managing options, configuration values and secrets
        </li>
        <li>
          dataclass serialization functionality, cached file content decorators,
          ...
        </li>
      </ul>
    </ProjectCard>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
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
      return (
        "path.json = {key: value}\n" +
        "\n" +
        "with Path.tempfile() as tmp:\n" +
        "    do_work(logfile=tmp)\n"
      );
    },
    cliCode() {
      return (
        'cli.launch("chromium")' +
        "\n\n" +
        'items = cli.capture_output("ls")\n' +
        "for item in cli.track_progress(items):\n" +
        '\tif cli.confirm(f"Delete {item}?"):\n' +
        '\t\tprint("deleting..")' +
        "\n\n" +
        'options = {"l": "username", "p": 22}\n' +
        'cli.run("ssh", options, "localhost") '
      );
    },
    cacherCode() {
      return (
        "from persistent_cache import cache\n\n" +
        "@cache\n" +
        "def expensive_function(..):\n" +
        "\t..\n"
      );
    },
    packageUtilsCode() {
      return (
        "@dataclass\n" +
        "class Options:\n" +
        "    debug: bool = False\n" +
        "    output_path: Path = field(default_factory=Path.cwd)\n" +
        "\n" +
        "def main(options: Options):\n" +
        "    ...\n" +
        "\n" +
        "entry_point = create_entry_point(main)\n" +
        'if __name__ == "__main__":\n' +
        "    entry_point()"
      );
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: disc;
}
</style>
