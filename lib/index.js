'use strict';
var fs = require('fs');
/**
 * Gets the version number of the Raspberry Pi board
 * Revision list available at:
 * http://elinux.org/RPi_HardwareHistory#Board_Revision_History
 * @returns {number}
 */
var getPiRevision = function () {
  var revision;
  var version;
  fs.readFileSync('/proc/cpuinfo').toString().split(/\r?\n/).forEach(function (line) {
    // Match a line of the form 'Revision : 0002' while ignoring extra info in front of the revsion (like 1000 when
    // the Pi was over - volted
    revision = line.match(/Revision\s+:\s+((?:\w)*\w{4})$/);
    if(revision) {
    try {
          version = require('./versions.json')[revision[1]];
          version.revision = revision[1];
        } catch (e) {
          throw new Error('We dont recognize your revision (' + revision + '). Sorry! get in touch and let me know so I\'ll add it');
        }
    }
    if (revision && revision[1] in ['0000', '0002', '0003']) {
      // This bit is the only thing i did the lib for
      version.i2c = 0;
    } else if (revision) {
      // After rev '0003', i2c bus is in /dev/i2c-1
      version.i2c = 1;
    }
  });
  // Couldn't find the revision, assume revision 0 like older code for compatibility.
  return version;
};

module.exports = getPiRevision();
