/**
 * The examples provided by Oculus are for non-commercial testing and
 * evaluation purposes only.
 *
 * Oculus reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * OCULUS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Example ReactVR app that allows a simple tour using linked 360 photos.
 */
// import {ReactInstance} from 'react-360-web';

// function init(bundle, parent, options) {
//   const vr = new ReactInstance(bundle, 'TourSample', parent, {
//     // Show a gaze cursor.
//     cursorVisibility: 'visible',
//     ...options,
//   });
//   vr.render = function() {
//     // Any custom behavior you want to perform on each frame goes here
//   };
//   // Begin the animation loop
//   vr.start();
//   return vr;
// }

// window.ReactVR = {init};

import { ReactInstance, Surface, Location } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  // new Location([0, 0, -2], [0, Math.PI / 2, 0]);

  r360.renderToLocation(
    r360.createRoot('TourSample'),
    new Location([0, 0, 0]),
  );
  // r360.renderToLocation(
  //   r360.createRoot('blf_vr',{img:"img1"}),
  //   new Location([0, 0, -4]),
  // );


  // Load the initial environment
  // r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
  // r360.compositor.setBackground(r360.getAssetURL('eqr_000000_crop.png'));
}

window.React360 = { init };
