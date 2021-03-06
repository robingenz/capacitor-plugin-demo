import { Platform } from '@ionic/angular';

export function createPlatformSpy(): jasmine.SpyObj<Platform> {
  return jasmine.createSpyObj('Platform', {
    is: false,
    ready: Promise.resolve(),
  });
}
