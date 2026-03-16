# Module 2, Lesson 2.1: Installing OpenClaw (Step-by-Step)

## Welcome to the Practical Phase

Enough theory. It's time to get your hands dirty. In this lesson, you'll install OpenClaw on your computer and take the first step toward having your own AI co-pilot.

Don't worry if you're not technical—I'll walk you through every step. If you can follow a recipe, you can install OpenClaw.

## What You'll Need Before Starting

Before we begin the installation, make sure you have:

### Essential Requirements
- **A computer** (Mac, Windows, or Linux)
- **Administrator access** (to install software)
- **Internet connection** (for downloading components)
- **About 30-60 minutes** (depending on your setup)

### For Mac Users
- macOS 10.15 (Catalina) or newer
- Homebrew (we'll install it if you don't have it)

### For Windows Users
- Windows 10 or 11
- WSL2 (Windows Subsystem for Linux) or willingness to install it
- Or use the native Windows installation method

### For Linux Users
- Any modern distribution (Ubuntu, Debian, Fedora, etc.)
- Sudo access

## Understanding the Components

OpenClaw has several components. Understanding them helps the installation make sense:

### Core Components

**Node.js** - The runtime environment
- OpenClaw is built on Node.js
- Version 18 or higher required
- Comes with npm (Node Package Manager)

**OpenClaw CLI** - The command-line interface
- Your primary way to interact with OpenClaw
- Handles installation, configuration, and running
- Installable via npm

**AI Models** - The intelligence
- Downloaded separately after installation
- Run locally on your hardware
- Ollama is the easiest way to get started

**Configuration Files** - Your settings
- Created during setup
- Define your agent's behavior
- Store memory and preferences

## Installation: Mac (Recommended Path)

Mac users have the smoothest installation experience. Here's the step-by-step:

### Step 1: Install Homebrew (if you don't have it)

Open Terminal (Cmd+Space, type "Terminal") and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the prompts. This may take a few minutes.

### Step 2: Install Node.js

```bash
brew install node
```

Verify the installation:
```bash
node --version
```

You should see version 18.x or higher.

### Step 3: Install OpenClaw

```bash
npm install -g openclaw
```

This installs OpenClaw globally on your system.

### Step 4: Install Ollama (for local AI models)

```bash
brew install ollama
```

Or download from [ollama.com](https://ollama.com) for the graphical installer.

### Step 5: Download Your First Model

```bash
ollama pull llama3.2
```

This downloads a capable model that runs well on most hardware. Other good options:
- `ollama pull mistral` - Fast and efficient
- `ollama pull gemma2` - Google's open model
- `ollama pull phi3` - Lightweight option for limited hardware

### Step 6: Initialize OpenClaw

```bash
openclaw init
```

This creates your configuration files and workspace.

### Step 7: Start OpenClaw

```bash
openclaw start
```

Or for a simpler approach:
```bash
openclaw chat
```

Congratulations! You're now running your AI agent.

## Installation: Windows

Windows installation has two paths: WSL2 (recommended) or native Windows.

### Option A: WSL2 Method (Recommended)

**Step 1: Enable WSL2**

Open PowerShell as Administrator and run:
```powershell
wsl --install
```

Restart your computer when prompted.

**Step 2: Install Ubuntu**

From the Microsoft Store, install Ubuntu (or use the default that comes with WSL2).

**Step 3: Open Ubuntu Terminal**

Launch Ubuntu from your Start menu. First launch will ask you to create a username and password.

**Step 4: Update and Install Node.js**

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Step 5: Install OpenClaw**

```bash
npm install -g openclaw
```

**Step 6: Install Ollama**

Download the Windows installer from [ollama.com](https://ollama.com) and run it. Ollama will automatically work with WSL2.

**Step 7: Pull a Model**

```bash
ollama pull llama3.2
```

**Step 8: Initialize and Start**

```bash
openclaw init
openclaw chat
```

### Option B: Native Windows Method

If you prefer not to use WSL2:

**Step 1: Install Node.js**

Download the Windows installer from [nodejs.org](https://nodejs.org) and run it.

**Step 2: Install OpenClaw**

Open Command Prompt or PowerShell and run:
```cmd
npm install -g openclaw
```

**Step 3: Install Ollama**

Download and run the Windows installer from [ollama.com](https://ollama.com).

**Step 4: Pull Model and Start**

```cmd
ollama pull llama3.2
openclaw init
openclaw chat
```

## Installation: Linux

Linux users have the most straightforward path:

### Step 1: Install Node.js

For Ubuntu/Debian:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

For Fedora/RHEL:
```bash
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs
```

### Step 2: Install OpenClaw

```bash
npm install -g openclaw
```

### Step 3: Install Ollama

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Step 4: Pull Model and Start

```bash
ollama pull llama3.2
openclaw init
openclaw chat
```

## Verifying Your Installation

After installation, verify everything is working:

### Check OpenClaw

```bash
openclaw --version
```

You should see version information.

### Check Ollama

```bash
ollama list
```

You should see the model you downloaded listed.

### Test the Integration

Start OpenClaw and send a test message:
```bash
openclaw chat
```

Then type: "Hello, can you introduce yourself?"

You should receive a response from your AI agent.

## Troubleshooting Common Issues

### "command not found: openclaw"

The npm global bin directory may not be in your PATH.

**Mac/Linux:**
```bash
export PATH="$(npm config get prefix)/bin:$PATH"
```

Add this to your shell profile (~/.zshrc or ~/.bashrc) to make it permanent.

**Windows:**
Close and reopen your terminal, or restart your computer.

### "Error: EACCES permission denied"

Don't use sudo with npm. Instead, fix your npm permissions:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### "Ollama connection refused"

Make sure Ollama is running:

```bash
ollama serve
```

This starts the Ollama server in the background.

### "Model not found"

Pull the model first:

```bash
ollama pull llama3.2
```

### "Out of memory" errors

Your hardware may not support the model size. Try a smaller model:

```bash
ollama pull phi3
```

Then update your OpenClaw config to use phi3.

## Configuration Basics

After installation, you'll have a configuration directory. The location varies by OS:

- **Mac**: `~/.openclaw/`
- **Windows**: `%USERPROFILE%\.openclaw\`
- **Linux**: `~/.openclaw/`

### Key Configuration Files

**config.yaml** - Main settings
- Model selection
- API keys (if using cloud models)
- Feature toggles

**AGENTS.md** - Agent behavior instructions
- How your agent should behave
- What it should know
- Rules and constraints

**MEMORY.md** - Long-term memory
- Facts your agent remembers
- Important context
- Learned preferences

**memory/** - Daily notes directory
- Automatic session logs
- Temporary memory
- Activity history

We'll explore these in detail in Lesson 2.2.

## Choosing Your First Model

The model you choose affects performance and capability:

### For Limited Hardware (8GB RAM, no GPU)
- **phi3** (2B parameters) - Fast, capable, lightweight
- **gemma:2b** - Google's efficient small model
- **tinyllama** - Minimal resource usage

### For Moderate Hardware (16GB RAM, any GPU)
- **llama3.2** (3B) - Excellent balance
- **mistral** (7B) - Strong all-around performance
- **gemma2:9b** - More capable, still efficient

### For Powerful Hardware (32GB+ RAM, good GPU)
- **llama3.1:8b** - High capability, good speed
- **mixtral** (8x7B) - Excellent reasoning
- **command-r** - Great for longer contexts

You can have multiple models installed and switch between them as needed.

## What's Next?

You now have OpenClaw installed and running. But an out-of-the-box installation is just the beginning.

In Lesson 2.2, we'll configure OpenClaw to match your needs—setting up memory, customizing behavior, and connecting the tools that will make it truly useful.

---

## Key Takeaways

1. **Installation is straightforward on all platforms** - Follow the steps for your OS
2. **Node.js and Ollama are the key dependencies** - OpenClaw runs on Node, Ollama provides models
3. **Choose a model that matches your hardware** - Start small, scale up as needed
4. **Verify with a test conversation** - Make sure everything is working before moving on
5. **Configuration comes next** - The default install works, but customization makes it powerful