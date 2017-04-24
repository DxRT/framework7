import t7 from 'template7';
import $ from 'dom7';

import Framework7 from './framework7-class';
import Install from './install';

import Device from './device';
import Support from './support';
import Events from './events';
import Touch from './touch';

import Demo from './demo-module';

// Modules Install
Framework7.install = Install.bind(Framework7);
Framework7.prototype.modules = {};

// Template7
Framework7.prototype.t7 = t7;

// Dom7
Framework7.prototype.$ = $;

// Device
Framework7.install(Device);

// Support
Framework7.install(Support);

// Events
Framework7.install(Events);

// Touch
Framework7.install(Touch);

// Demo Module
Framework7.install(Demo, { foo: 'bar' });

export default Framework7;