// Something esbuild won't like in node10 but won't sweat in 14.
async function* hellos(): AsyncGenerator<string> {
  yield await new Promise(resolve => resolve("hello"));
  yield await new Promise(resolve => resolve("world"));
}

export async function handler() {
  const parts = new Array<string>();
  for await (const part of hellos()) {
    parts.push(part);
  }

  console.log(parts.join(' '));
}