/*
  Use `npm test` to run tests using mocha.
  or `./node_modules/.bin/mocha --reporter spec`
*/

var proxyquire = require('proxyquire')
  , expect = require('chai').expect
  , versions = require('../lib/versions.json');

describe('my module', function( done ) {

    it('should load as a module', function(done) {
        var rpi = proxyquire('../lib/index.js', {
            'fs': {
                readFileSync: function () {
                    // console.log('Revision :    ' + revision);
                    return 'Revision :    ' + '0002';
                }
                // '@noCallThru': true
            }
        });
        expect( rpi ).to.exist;
        done();
    });

    it('should expose all its properties', function(done) {
        var rpi = proxyquire('../lib/index.js', {
            'fs': {
                readFileSync: function () {
                    return 'Revision :    ' + '0002';
                }
            }
        });
        expect(rpi.revision).to.exist;
        expect(rpi.relDate).to.exist;
        expect(rpi.model).to.exist;
        expect(rpi.PCBRev).to.exist;
        expect(rpi.memory).to.exist;
        expect(rpi.notes).to.exist;
        done();
    });

    it('should identify an overclocked device', function() {
        ['10000002', '1920093'].forEach(function(revision) {
            var rpi = proxyquire('../lib/index.js', {
                'fs': {
                    readFileSync: function () {
                        return 'Revision :    ' + revision;
                    }
                }
            });
            expect(rpi.revision).to.exist;
            expect(rpi.relDate).to.exist;
            expect(rpi.model).to.exist;
            expect(rpi.PCBRev).to.exist;
            expect(rpi.memory).to.exist;
            expect(rpi.notes).to.exist;
        });
    });

    var rev = "";
    for (revision in versions){
        rev = revision;
        if (versions.hasOwnProperty(revision)) {
            var rpi = proxyquire('../lib/index.js', {
                'fs': {
                    readFileSync: function () {       // console.log('Revision :    ' + revision);
                        file = 'CPU revision	: 4\n';
                        file += '\n';
                        file += 'Hardware	: BCM2709\n';
                        file += 'Revision	: ' + revision + '\n';
                        file += 'Serial		: 000000000c730274\n';
                        return file;
                    }
                }
            });

            if (revision == '0000' || revision == '0002' || revision == '0003') {
                versions[revision].i2c = 0;
            } else {
                versions[revision].i2c = 1;
            }

            versions[revision].revision = revision;

            it('should return the correct info for revision ' + versions[revision].revision, function () {
                expect(rpi).to.equal(versions[revision]);
            })
        }
    }
});
