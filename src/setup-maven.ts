import * as core from '@actions/core';
import * as installer from './installer';

async function run() {
  try {
    let version = core.getInput('maven-version');
    if (version) {
      await installer.getMaven(version);
    }
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed(`An unexpected error occurred: ${String(error)}`);
    }
  }
}

run();
