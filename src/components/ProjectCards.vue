<template>
  <div>
    <ProjectCard
      v-if="currentIndex === 99"
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
      v-if="currentIndex === 1"
      url="superpathlib"
      description=""
      :badges="true"
      image="superpathlib.png"
    />
    <ProjectCard
      v-if="currentIndex === 12"
      url="cli"
      description="High-level interface for interactions with the command-line and external processes"
      :badges="true"
      package="powercli"
    />
    <ProjectCard
      v-if="currentIndex === 13"
      url="persistent-cache"
      description="Persistent cache for expensive function calls"
      :badges="true"
      package="persistent-function-cache"
    />
    <ProjectCard
      v-if="currentIndex === 14"
      url="downloader"
      description="Package to download files in chunks, resume from partial downloads and retry on errors"
      :badges="true"
      package="fire-downloader"
    />
    <ProjectCard
      v-if="currentIndex === 15"
      url="package-dev-tools"
      description="CI/CD tools for Python packages"
      :badges="true"
    />
    <ProjectCard
      v-if="currentIndex === 16"
      url="package-dev-utils"
      description="Development utilities for Python packages"
      :badges="true"
    />
    <ProjectCard
      v-if="currentIndex === 16"
      url="package-utils"
      description="Generic utilities for Python packages"
      :badges="true"
    />
    <ProjectCard
      v-if="currentIndex === 17"
      url="powertrace"
      description="Package for detailed stack trace logging and visualization"
      :badges="true"
    />
    <ProjectCard
      v-if="currentIndex === 18"
      url="powertrace-hooks"
      description="Package that installs automated stack trace logging and visualization"
      :badges="true"
    />
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  props: {
    currentIndex: Number,
  },
  components: {
    ProjectCard,
  },
};
</script>
