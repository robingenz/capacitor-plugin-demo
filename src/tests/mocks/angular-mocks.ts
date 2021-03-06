import { Component, Pipe } from '@angular/core';

export function createPipeMock(options: Pipe): Pipe {
  const metadata: Pipe = {
    name: options.name,
  };
  return Pipe(metadata)(class MockPipe {}) as Pipe;
}

export function createComponentMock(options: Component): Component {
  const metadata: Component = {
    selector: options.selector,
    inputs: options.inputs,
  };
  return Component(metadata)(class MockComponent {}) as Component;
}
