import { beatmaps_events_list } from "../api/v2/beatmaps_events_list";
import { beatmaps_lookup } from "../api/v2/beatmaps_lookup";
import { beatmaps_details } from "../api/v2/beatmaps_details";
import { beatmaps_actions } from "../api/v2/beatmaps_actions";
import { beatmaps_download } from "../api/v2/beatmaps_download";
import { beatmaps_packs_list } from "../api/v2/beatmaps_packs_list";
import { beatmap_packs_details } from "../api/v2/beatmaps_packs_details";
import { beatmaps_discussions_list } from "../api/v2/beatmaps_discussions_list";
import { beatmaps_discussions_posts } from "../api/v2/beatmaps_discussions_posts";
import { beatmaps_discussions_votes } from "../api/v2/beatmaps_discussions_votes";



/**
 * ##### Description
 * Object containing methods for retrieving beatmaps data.
 */
export const beatmaps = {
  /**
   * ##### Description
   * Covers API Endpoints regarding beatmap packs.
   *
   */
  packs: {
    /**
     * ### `GET` [/v2/beatmaps/packs](https://osu.ppy.sh/docs/index.html#get-beatmap-packs)
     * `async` Retrieves a list of all available beatmap packs.
     *
     * &nbsp;
     *
     * ## Parameters
     * - `params.type` - Type of the beatmap pack.
     * - `params.cusor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
     * - `addons?` - Additional parameters to include in the request.
     *
     * &nbsp;
     *
     * ### Usage Example
      * ```js
      * const { auth, v2 } = require('osu-api-extended');
      * 
      * async function main() {
      *   try {
      *    await auth.login({
      *      type: 'v2',
      *      client_id: CLIENT_ID,
      *      client_secret: CLIENT_SECRET,
      *      cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
      *    });
      * 
      *     const result = await v2.beatmaps.packs.list({
      *       type: 'loved'
      *     });
      *     if (result.error != null) {
      *       console.log(result.error);
      *       return;
      *     };
      * 
      * 
      *     console.log(result);
      *   } catch (error) {
      *     console.log(error);
      *   };
      * };
      * 
      * main();
      * ```
     *
     * &nbsp;
     *
     * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.beatmaps.packs.list_v3) | [Check return types](../types/v2/beatmaps_packs_list.ts)
     */
    list: beatmaps_packs_list,
    /**
     * ### `GET` [/v2/beatmaps/packs/{pack_tag}](https://osu.ppy.sh/docs/index.html#get-beatmap-pack)
     * `async` Retrieves a beatmap pack by given ID.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `pack_tag` - ID of the beatmap pack to retrieve.
     * - `addons?` - Additional parameters to include in the request.
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * const { auth, v2 } = require('osu-api-extended');
     * 
     * async function main() {
     *   try {
     *     await auth.login({
     *       type: 'v2',
     *       client_id: CLIENT_ID,
     *       client_secret: CLIENT_SECRET,
     *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
     *     });
     * 
     *     const result = await v2.beatmaps.packs.details('ST265');
     *     if (result.error != null) {
     *       console.log(result.error);
     *       return;
     *     };
     * 
     * 
     *     console.log(result);
     *   } catch (error) {
     *     console.log(error);
     *   };
     * };
     * 
     * main();
     * ```
     *
     * &nbsp;
     *
     * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.beatmaps.packs.details_v3) | [Check return types](../types/v2/beatmaps_packs_details.ts)
     */
    details: beatmap_packs_details,
  },
  /**
   * ### `GET` [/v2/beatmaps/lookup](https://osu.ppy.sh/docs/index.html#lookup-beatmap)
   * ### `GET` [/v2/beatmapsets/lookup](https://osu.ppy.sh/docs/index.html#get-apiv2beatmapsetslookup)
   * ### `POST` [/v2/beatmaps/{beatmap}/attributes](https://osu.ppy.sh/docs/index.html#get-beatmap-attributes)
   * ### `GET` [/v2/beatmaps](https://osu.ppy.sh/docs/index.html#get-beatmaps)
   * `async` Lookup for a beatmap by given parameters.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Type of lookup.
   *
   * & &nbsp;
   *
   * ### Parameters for `params.type:'difficulty'`
   * - `params.id` - ID of the difficulty to lookup for.
   * - `params.checksum` - Checksum of the difficulty to lookup.
   * - `params.filename` - Filename of the difficulty to lookup.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'set'`
   * - `params.id` - ID of the beatmap set to lookup for.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'attribute'`
   * - `params.id` - ID of the beatmap to lookup for.
   * - `params.mods` - Mod combination of the beatmap to lookup for.
   * - `params.mode` - Mode of the beatmap to lookup for.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'difficulties'`
   * - `params.ids` - IDs of the difficulties to lookup for.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.beatmaps.lookup({
   *       type: 'attributes',
   *       id: 3798013,
   *     });
   *     // or
   *     const result = await v2.beatmaps.lookup({
   *       type: 'difficulties',
   *       ids: [4233769, 3798013]
   *     });
   *     // or
   *     const result = await v2.beatmaps.lookup({
   *       type: 'difficulty',
   *       id: 4233769,
   *     });
   *     // or
   *     const result = await v2.beatmaps.lookup({
   *       type: 'set',
   *       id: 2246377,
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.beatmaps.lookup_v3) | [Check return types](../types/v2/beatmaps_lookup.ts)
   */
  lookup: beatmaps_lookup,
  /**
   * ### `GET` [v2/beatmaps/{beatmap}](https://osu.ppy.sh/docs/index.html#get-beatmap)
   * ### `GET` [v2/beatmapsets/{beatmapset}](https://osu.ppy.sh/docs/index.html#get-apiv2beatmapsetsbeatmapset)
   * `async` Retrieves a beatmap or beatmap set by given ID.
   *
   * &nbsp;
   *
   * ##### Parameters
   * - `params.type` - 'difficulty' or 'set'.
   * - `params.id` - The ID to search for.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.beatmaps.details({
   *       type: 'set',
   *       id: 2182218
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.beatmaps.details_v3) | [Check return types](../types/v2/beatmaps_details_set.ts)
   */
  details: beatmaps_details,
  /**
   * ##### Description
   * Covers API Endpoints regarding beatmap set events.
   */
  events: {
    /**
     * ### `GET` [v2/beatmapsets/{beatmapset}/events](https://osu.ppy.sh/docs/index.html#get-apiv2beatmapsetsevents)
     * `async` Retrieves a list of beatmap set events.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `obj.user` - Filter by author of the event.
     * - `obj.types` - Filter by type of the event.
     * - `obj.min_date` - Filter by minimum date of the event.
     * - `obj.max_date` - Filter by maximum date of the event.
     * - `addons?` - Additional parameters to include in the request.
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * const { auth, v2 } = require('osu-api-extended');
     * 
     * async function main() {
     *   try {
     *     await auth.login({
     *       type: 'v2',
     *       client_id: CLIENT_ID,
     *       client_secret: CLIENT_SECRET,
     *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
     *     });
     * 
     *     const result = await v2.beatmaps.events.list({ types: ['approve'] });
     *     if (result.error != null) {
     *       console.log(result.error);
     *       return;
     *     };
     * 
     * 
     *     console.log(result);
     *   } catch (error) {
     *     console.log(error);
     *   };
     * };
     * 
     * main();
     * ```
     *
     * &nbsp;
     *
     * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.beatmaps.events.list_v3) | [Check return types](../types/v2/beatmaps_events_list.ts)
     */
    list: beatmaps_events_list,
  },
  /**
   * `async` Downloads a beatmap or beatmap set by given ID. (Supports different hosts)
   *
   * &nbsp;
   *
   * ### Available hosts
   * - For `type:'difficulty'`: osu, osu_direct_mirror, catboy
   * - For `type:'set'`: osu, beatconnect, nerinyan, osu_direct_mirror, sayobot, gatari, ripple, catboy
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Type of the beatmap.
   * - `params.id` - ID of the beatmap or beatmap set.
   * - `params.host` - Host of the download source.
   * - `params.file_path` - Path to the save location.
   * - `params.overwrite` - Whether to overwrite the file if it already exists.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'set'`
   * - `params.no_video?` - Whether to include video in the download.
   * - `params.progress_log_fn?` - Callback function to send progress.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     // only for downloading sets from osu host
   *     await auth.login({
   *       type: 'lazer',
   *       login: login,
   *       password: password,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   * 
   *     const progress_update = (...args) => {
   *       console.log(args);
   *     };
   *     const set_id = 320118;
   * 
   * 
   *     const result = await v2.beatmaps.download({
   *       type: 'set',
   *       host: 'gatari',
   *       id: set_id,
   *       file_path: `./cache/${set_id}.osz`,
   *       progress_log_fn: progress_update
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.beatmaps.download_v3)
   */
  download: beatmaps_download,
  /**
   * ##### Description
   * Covers API Endpoints regarding beatmap discussions.
   */
  discussions: {
    /**
     * ### `GET` [/v2/beatmapsets/discussions](https://osu.ppy.sh/docs/index.html#get-beatmapset-discussions)
     * `async` Retrieves a list of beatmap set discussions.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `params.only_unresolved?` - Filter by unresolved discussions.
     * - `params.user?` - Filter by author of the discussion.
     * - `params.beatmap_id?` - Filter by beatmap ID.
     * - `params.beatmapset_id?` - Filter by beatmap set ID.
     * - `params.beatmapset_status?` - Filter by beatmap set status.
     * - `params.message_type?` - Filter by message type.
     * - `params.limit?` - Maximum number of discussions to return.
     * - `params.sort?` - Sort order of the discussions.
     * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
     * - `addons?` - Additional parameters to include in the request.
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * const { auth, v2 } = require('osu-api-extended');
     * 
     * async function main() {
     *   try {
     *     await auth.login({
     *       type: 'v2',
     *       client_id: CLIENT_ID,
     *       client_secret: CLIENT_SECRET,
     *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
     *     });
     * 
     *     const result = await v2.beatmaps.discussions.list({ beatmapset_id: 2084849 });
     *     if (result.error != null) {
     *       console.log(result.error);
     *       return;
     *     };
     * 
     * 
     *     console.log(result);
     *   } catch (error) {
     *     console.log(error);
     *   };
     * };
     * 
     * main();
     * ```
     *
     * &nbsp;
     *
     * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.beatmaps.discussions.list_v3) | [Check return types](../types/v2/beatmaps_discussions_list.ts)
     */
    list: beatmaps_discussions_list,
    /**
     * ### `GET` [/v2/beatmapsets/discussions/posts](https://osu.ppy.sh/docs/index.html#beatmapset-discussions)
     * `async` Retrieves the posts of a beatmap set discussion.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `params.discussion_id?` - ID of the beatmap set discussion to retrieve.
     * - `params.sort?` - Sort order of the posts.
     * - `params.type?` - Filter by type of the post.
     * - `params.limit?` - Maximum number of posts to return.
     * - `params.user?` - Filter by author of the post.
     * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
     * - `addons?` - Additional parameters to include in the request.
     *
     * &nbsp;
     *
     * ```js
     * const { auth, v2 } = require('osu-api-extended');
     * 
     * async function main() {
     *   try {
     *     await auth.login({
     *       type: 'v2',
     *       client_id: CLIENT_ID,
     *       client_secret: CLIENT_SECRET,
     *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
     *     });
     * 
     *     const result = await v2.beatmaps.discussions.posts();
     *     if (result.error != null) {
     *       console.log(result.error);
     *       return;
     *     };
     * 
     * 
     *     console.log(result);
     *   } catch (error) {
     *     console.log(error);
     *   };
     * };
     * 
     * main();
     * ```
     *
     * &nbsp;
     *
     * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.beatmaps.discussions.posts_v3) | [Check return types](../types/v2/beatmaps_discussions_posts.ts)
     */
    posts: beatmaps_discussions_posts,
    /**
     * ### `GET` [/v2/beatmapsets/discussions/votes](https://osu.ppy.sh/docs/index.html#get-beatmapset-discussion-votes)
     * `async` Retrieves the votes given to beatmap set discussions.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `params.discussion_id?` - ID of the beatmap set discussion to retrieve.
     * - `params.sort?` - Sort order of the votes.
     * - `params.score?` - Filter by score of the vote.
     * - `params.user?` - Filter by author of the vote.
     * - `params.receiver?` - Filter by receiver of the vote.
     * - `params.limit?` - Maximum number of votes to return.
     * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
     * - `addons?` - Additional parameters to include in the request.
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * const { auth, v2 } = require('osu-api-extended');
     * 
     * async function main() {
     *   try {
     *     await auth.login({
     *       type: 'v2',
     *       client_id: CLIENT_ID,
     *       client_secret: CLIENT_SECRET,
     *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
     *     });
     * 
     *     const result = await v2.beatmaps.discussions.votes({ discussion_id: 4533908 });
     *     if (result.error != null) {
     *       console.log(result.error);
     *       return;
     *     };
     * 
     * 
     *     console.log(result);
     *   } catch (error) {
     *     console.log(error);
     *   };
     * };
     * 
     * main();
     * ```
     *
     * &nbsp;
     *
     * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.beatmaps.discussions.votes_v3) | [Check return types](../types/v2/beatmaps_discussions_votes.ts)
     */
    votes: beatmaps_discussions_votes,
  },
  /**
   * Currently broken.
   */
  actions: beatmaps_actions,
};




import { changelogs_list } from '../api/v2/changelogs_list';
import { changelogs_details } from '../api/v2/changelogs_details';

/**
 * ##### Description
 * Covers API Endpoints regarding changelogs.
 */
export const changelogs = {
  /**
   * ### `GET` [/v2/changelogs](https://osu.ppy.sh/docs/index.html#get-changelog-listing)
   * ### `GET` [/v2/changelogs/{changelog}](https://osu.ppy.sh/docs/index.html#lookup-changelog-build)
   * `async` Retrieves a list of all available changelogs.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Fetch type.
   * - `params.message_formats` - Return format.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `type:'all'`
   * - `params.from_build?` - Minimum build version.
   * - `params.to_build?` - Maximum build version.
   * - `params.stream_name?` - Stream name to return builds from.
   * - `params.max_id?` - Maximum build ID.
   *
   * &nbsp;
   *
   * ### Parameters for `type:'lookup'`
   * - `params.changelog` - Build version, update stream name, or build ID.
   * - `params.key` - Unset to query by build version or stream name, or id to query by build ID.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     const result = await v2.changelogs.list({
   *       type: 'all',
   *       stream_name: 'web',
   *     });
   *     // or
   *     const result = await v2.changelogs.list({
   *       type: 'lookup',
   *       changelog: 'lazer'
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.changelogs.list_v3) | [Check return types](../types/v2/changelogs_list_all.ts)
   */
  list: changelogs_list,
  /**
   * ### `GET` [/v2/changelog/{stream}/{build}](https://osu.ppy.sh/docs/index.html#get-changelog-build)
   * `async` Retrieves details of the specified build.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.stream_name` - Update stream name.
   * - `params.build_version` - Build version.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     const result = await v2.changelogs.details({
   *       stream_name: 'web',
   *       build_version: '2024.930.0'
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.changelogs.details_v3) | [Check return types](../types/v2/changelogs_details.ts)
   */
  details: changelogs_details,
};




import { comments_list } from '../api/v2/comments_list';
import { comments_details } from '../api/v2/comments_details';
import { comments_actions } from '../api/v2/comments_actions';

/**
 * ##### Description
 * Covers API Endpoints regarding comments.
 */
export const comments = {
  /**
   * ### `GET` [/v2/comments](https://osu.ppy.sh/api/v2/comments)
   * `async` Retrieves a list of all comments by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.type?` - Type of the resource to get comments from.
   * - `params.id?` - ID of the resource to get comments from.
   * - `params.parent_id?` - ID of the parent comment.
   * - `params.after_id?` - ID of the comment after which the comments will be returned.
   * - `params.cursor?.id`- The ID of the cursor.
   * - `params.cursor?.created_at` - The timestamp of the cursor.
   * - `params.sort?` - Sort order of the comments.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     const result = await v2.comments.list({
   *       type: 'news_post',
   *       id: 1430,
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.comments.list_v3) | [Check return types](../types/v2/comments_list.ts)
   */
  list: comments_list,
  /**
   * ### `GET` [/v2/comments/{comment}](https://osu.ppy.sh/docs/index.html#get-a-comment)
   * `async` Retrieves a comment by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.comment_id` - ID of the comment to retrieve.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     const result = await v2.comments.details(3035523);
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.comments.details_v3) | [Check return types](../types/v2/comments_details.ts)
   */
  details: comments_details,
  /**
   * ### `POST` [/v2/comments](https://osu.ppy.sh/docs/index.html#post-a-new-comment)
   * ### `PUT` [/v2/comments/{comment}](https://osu.ppy.sh/docs/index.html#edit-comment)
   * ### `PATCH` [/v2/comments/{comment}](https://osu.ppy.sh/docs/index.html#edit-comment)
   * ### `DELETE` [/v2/comments/{comment}](https://osu.ppy.sh/docs/index.html#delete-comment)
   * ### `POST` [/v2/comments/{comment}/vote](https://osu.ppy.sh/docs/index.html#add-comment-vote)
   * ### `DELETE` [/v2/comments/{comment}/vote](https://osu.ppy.sh/docs/index.html#remove-comment-vote)
   * `async` Perform comment actions via endpoint.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.id?` - ID of the comment to perform the action on.
   * - `params.type` - Type of the action to perform.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'new'`
   * - `params.message?` - The message of the comment.
   * - `params.parent_id?` - The id of the comment to reply to.
   * - `params.commentable_type?` - Resource type the comment thread is attached to.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'edit'`
   * - `params.message?` - The message of the comment.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login: login,
   *       password: password,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.comments.actions({
   *       type: 'new',
   * 
   *       commentable_type: 'beatmapset',
   *       id: 1378401,
   *       message: 'hello from api'
   *     });
   *     // or
   *     const result = await v2.comments.actions({
   *       type: 'edit',
   * 
   *       id: 3058002,
   *       message: 'hello from api (edited)'
   *     });
   *     // or 
   *     const result = await v2.comments.actions({
   *       type: 'vote',
   *       id: 3058002,
   *     });
   *     // or 
   *     const result = await v2.comments.actions({
   *       type: 'unvote',
   *       id: 3058002,
   *     });
   *     // or 
   *     const result = await v2.comments.actions({
   *       type: 'delete',
   *       id: 3058002,
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.comments.actions_v3) | [Check return types](../types/v2/comments_actions.ts)
   */
  actions: comments_actions,
};




import { users_list } from "../api/v2/users_list";
import { users_lookup } from "../api/v2/users_lookup";
import { users_events } from "../api/v2/users_events";
import { users_details } from "../api/v2/users_details";
import { users_activity } from "../api/v2/users_activity";
import { users_beatmaps } from "../api/v2/users_beatmaps";
import { users_kudosu } from "../api/v2/users_kudosu";

/**
 * ##### Description
 * Covers API Endpoints regarding users.
 */
export const users = {
  /**
   * ### `GET` [/v2/users](https://osu.ppy.sh/docs/index.html#get-users)
   * `async` Retrieves a list of users by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.ids` - List of user ids to retrieve.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.users.list({
   *       ids: [2, 8928855, 7562902, 10083439],
   *       include_variants: true
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.users.list_v3) | [Check return types](../types/v2/users_list.ts)
   */
  list: users_list,
  /**
   * ### `GET` [/v2/users/lookup](https://osu.ppy.sh/docs/index.html#get-apiv2userslookup)
   * `async` Retrieves a list of users by their id or name.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.ids` - List of user ids or names to retrieve.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.users.lookup({
   *       ids: [2, 8928855, 7562902, 'mrekk', 'whitecat'],
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.users.lookup_v3) | [Check return types](../types/v2/users_list.ts)
   */
  lookup: users_lookup,
  /**
   * ### `GET` [/v2/users/{user}/kudosu](https://osu.ppy.sh/docs/index.html#get-user-kudosu)
   * `async` Retrieves the kudosu history of a given user.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID of the user to retrieve.
   * - `params.limit?` - Maximum number of results to return.
   * - `params.offset?` - Result offset for pagination.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.users.kudosu({ id: 4830261 });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.users.kudosu_v3) | [Check return types](../types/v2/users_kudosu.ts)
   */
  kudosu: users_kudosu,
  /**
   * ### `GET` [/v2/events](https://osu.ppy.sh/docs/index.html#get-events)
   * `async` Retrieves a list of user events by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.type?` - Filter by type of event.
   * - `params.sort?` - Sort order of the events by id.
   * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.users.events()
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.users.events_v3) | [Check return types](../types/v2/users_events.ts)
   */
  events: users_events,
  /**
   * ### `GET` [/v2/users/{user}/{mode?}](https://osu.ppy.sh/docs/index.html#get-user)
   * `async` Retrieves a user by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID or username of the user to retrieve.
   * - `params.mode?` - Retrieve data for a specific gamemode.
   * - `params.key?` - Type of the `params.id` parameter.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.users.details({ user: 9893708, mode: 'osu', key: 'id' });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.users.details_v3) | [Check return types](../types/v2/users_details.ts)
   */
  details: users_details,
  /**
   * ### `GET` [/v2/users/{user}/beatmapsets/{type}](https://osu.ppy.sh/docs/index.html#get-user-beatmaps)
   * `async` Retrieves a list of user's beatmaps sets by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.type` - Filter by type of beatmap set.
   * - `params.id` - ID of the user to retrieve.
   * - `params.limit?` - Maximum number of beatmap sets to return.
   * - `params.offset?` - Result offset for pagination.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.users.beatmaps({ type: 'ranked', id: 4378277 });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.users.beatmaps_v3) | [Check return types](../types/v2/users_beatmaps.ts)
   */
  beatmaps: users_beatmaps,
  /**
   * ### `GET` [/v2/users/{user}/recent_activity](https://osu.ppy.sh/docs/index.html#get-user-recent-activity)
   * `async` Retrieves a list of user's recent activities by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID of the user to retrieve.
   * - `params.limit?` - Maximum number of activities to return.
   * - `params.offset?` - Result offset for pagination.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.users.activity({ id: 11367222 });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.users.activity_v3) | [Check return types](../types/v2/users_activity.ts)
   */
  activity: users_activity,
};




import { scores_list } from "../api/v2/scores_list";
import { scores_details } from "../api/v2/scores_details";
import { scores_download } from "../api/v2/scores_download";

/**
 * ##### Description
 * Covers API Endpoints regarding scores.
 */
export const scores = {
  /**
   * ### `GET` [/v2/beatmaps/{beatmap}/scores](https://osu.ppy.sh/docs/index.html#get-beatmap-scores)
   * ### `GET` [/v2/beatmaps/{beatmap}/scores/users/{user}](https://osu.ppy.sh/docs/index.html#get-a-user-beatmap-score)
   * ### `GET` [/v2/beatmaps/{beatmap}/scores/users/{user}/all](https://osu.ppy.sh/docs/index.html#get-a-user-beatmap-scores)
   * ### `GET` [/v2/beatmaps/{beatmap}/solo-scores](https://osu.ppy.sh/docs/index.html#get-beatmap-scores-non-legacy)
   * ### `GET` /v2/scores
   * `async` Retrieves a list of scores by given parameters.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.mode?` - Retrieve data for a specific gamemode.
   * - `params.type` - Type of scores to retrieve.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type: 'leaderboard'`
   * - `params.leaderboard_type?: Type of leaderboard to retrieve.`
   * - `params.beatmap_id` - ID of the beatmap to retrieve data from.
   * - `params.mods?` - Retrieve scores for specific mods.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type: 'user_beatmap_best'`
   * - `params.beatmap_id` - ID of the beatmap.
   * - `params.user_id` - ID of the user.
   * - `params.mods?` - Retrieve scores for specific mods.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type: 'user_beatmap_all'`
   * - `params.beatmap_id` - ID of the beatmap.
   * - `params.user_id` - ID of the user.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'user_best' | 'user_firsts' | 'user_recent' | 'user_pinned'`
   * - `params.user_id` - ID of the user to retrieve data from.
   * - `params.include_fails?` - Include failed scores.
   * - `params.limit?` - Maximum number of scores to return.
   * - `params.offset?` - Result offset for pagination.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'latest_ranked'`
   * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.scores.list({
   *       type: 'user_beatmap_all',
   *       // or
   *       type: 'user_beatmap_best',
   *       beatmap_id: 1141858,
   *       user_id: 7562902
   *     });
   *     // or
   *     const result = await v2.scores.list({
   *       type: 'leaderboard',
   *       beatmap_id: 1141858
   *     });
   *     // or
   *     const result = await v2.scores.list({
   *       type: 'user_best',
   *       // or
   *       type: 'user_firsts',
   *       // or
   *       type: 'user_pinned',
   *       // or
   *       type: 'user_recent',
   *       user_id: 7562902,
   *     });
   *     // or
   *     const result = await v2.scores.list({
   *       type: 'latest_ranked',
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.scores.list_v3) | [Check return types](../types/v2/scores_list_user_recent.ts)
   *
   */
  list: scores_list,
  /**
   * ### `GET` [/v2/scores/{rulesetOrScore}/{score?}](https://osu.ppy.sh/docs/index.html#get-apiv2scoresrulesetorscorescore)
   * `async` Retrieves a score by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID of the score to retrieve.
   * - `params.mode?` - Gamemode of the score.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.scores.details({
   *       id: 3321956713,
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.scores.details_v3) | [Check return types](../types/v2/scores_details.ts)
   *
   */
  details: scores_details,
  /**
   * ### `GET` [/v2/scores/{rulesetOrScore}/{score}/download](https://osu.ppy.sh/docs/index.html#get-apiv2scoresrulesetorscorescoredownload)
   * `async` Downloads a score by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID of the score to download.
   * - `params.mode?` - Gamemode of the score.
   * - `params.file_path?` - Where to save the file.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login: login,
   *       password: password,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.scores.download({
   *       id: 3427873257,
   *       file_path: './cache/replay.osr'
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.scores.download_v3) | [Check return types](../types/v2/scores_download.ts)
   */
  download: scores_download,
};



import { forums_topics_list } from '../api/v2/forums_topics_list';
import { forums_topics_details } from '../api/v2/forums_topics_details';
import { forums_topics_actions } from '../api/v2/forums_topics_actions';
import { forums_list } from '../api/v2/forums_list';
import { forums_details } from '../api/v2/forums_details';

/**
 * ##### Description
 * Covers API Endpoints regarding forums.
 */
export const forums = {
  /**
   * ##### Description
   * Covers API Endpoints regarding forum topics.
   */
  topics: {
    /**
     * ### `GET` [/v2//forums/topics](https://osu.ppy.sh/docs/index.html#get-topic-listing)
     * `async` Retrieves a list of topics.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `params.id` - ID of the forum/subforum to retrieve.
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * const { auth, v2 } = require('osu-api-extended');
     * 
     * async function main() {
     *   try {
     *     await auth.login({
     *       type: 'v2',
     *       client_id: CLIENT_ID,
     *       client_secret: CLIENT_SECRET,
     *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
     *     });
     * 
     * 
     *     const result = await v2.forums.topics.list({ id: 15, sort: 'new' });
     *     if (result.error != null) {
     *       console.log(result.error);
     *       return;
     *     };
     * 
     * 
     *     console.log(result);
     *   } catch (error) {
     *     console.log(error);
     *   };
     * };
     * 
     * main();
     * ```
     *
     * &nbsp;
     *
     * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.forums.topics.list_v3) | [Check return types](../types/v2/forums_topics_list.ts)
     */
    list: forums_topics_list,
    /**
     * ### `GET` [/v2/forums/topics](https://osu.ppy.sh/docs/index.html#get-topic-and-posts)
     * `async` Retrieves a information about topic with list of posts by given parameters.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `params.id` - ID of the topic to retrieve.
     * - `params.start_id?` - ID of the topic after which the topics will be returned.
     * - `params.end_id?` - ID of the topic before which the topics will be returned.
     * - `params.limit?` - Maximum number of topics to return.
     * - `params.sort?` - Sort order of the topics.
     * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
     * - `addons?` - Additional parameters to include in the request.
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * const { auth, v2 } = require('osu-api-extended');
     * 
     * async function main() {
     *   try {
     *     await auth.login({
     *       type: 'v2',
     *       client_id: CLIENT_ID,
     *       client_secret: CLIENT_SECRET,
     *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
     *     });
     * 
     *     const result = await v2.forums.topics.details({
     *       id: 881367
     *     });
     * 
     *     if (result.error != null) {
     *       console.log(result.error);
     *       return;
     *     };
     * 
     *     console.log(result);
     *   } catch (error) {
     *     console.log(error);
     *   };
     * };
     * 
     * main();
     * ```
     *
     * &nbsp;
     *
     * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.forums.topics.details_v3) | [Check return types](../types/v2/forums_topics_details.ts)
     */
    details: forums_topics_details,
    /**
     * ### `POST` [/v2/forums/topics](https://osu.ppy.sh/docs/index.html#create-topic)
     * ### `POST` [/v2/forums/topics/{topic}/reply](https://osu.ppy.sh/docs/index.html#reply-topic)
     * ### `PUT/PATCH` [/v2/forums/posts/{post}](https://osu.ppy.sh/docs/index.html#edit-post)
     * ### `PUT/PATCH` [/v2/forums/topics/{topic}](https://osu.ppy.sh/docs/index.html#edit-topic)
     * `async` Perform actions on forum topics via API.
     *
     * &nbsp;
     *
     * ### Global Parameters
     * - `params.type` - Type of action to perform.
     * - `addons?` - Additional parameters to include in the request.
     *
     * ### Parameters for `params.type:'create'`
     * - `params.forum_id` - ID of the forum to create the topic in.
     * - `params.title` - Title of the topic.
     * - `params.message` - Message of the topic.
     * - `params.enable_poll` - Whether to enable the poll.
     * - `params.poll.allow_vote_change?` - Whether to allow users to change their vote.
     * - `params.poll.hide_results?` - Whether to hide the results of the poll.
     * - `params.poll.title` - Title of the poll.
     * - `params.poll.options` - Options of the poll.
     * - `params.poll.max_votes_per_user?` - Maximum number of votes per user.
     * - `params.poll.duration_days?` - Duration of the poll.
     *
     * &nbsp;
     *
     * ### Parameters for `params.type:'reply'`
     * - `params.post_id` - ID of the post to reply to.
     * - `params.message` - Message of the reply.
     *
     * &nbsp;
     *
     * ### Parameters for `params.type:'edit_post'`
     * - `params.post_id` - ID of the post to edit.
     * - `params.message` - Message of the edit.
     *
     * &nbsp;
     *
     * ### Parameters for `params.type:'edit_topic'`
     * - `params.topic_id?` - ID of the topic to edit.
     * - `params.post_id?` - ID of the post to edit.
     * - `params.title?` - New title of the topic.
     * - `params.message` - New message of the topic.
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * const { auth, v2 } = require('osu-api-extended');
     * 
     * async function main() {
     *   try {
     *     await auth.login({
     *       type: 'lazer',
     *       login: login,
     *       password: password,
     *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
     *     });
     * 
     *     const result = await v2.forums.topics.actions({
     *       type: 'create',
     * 
     *       forum_id: 52,
     * 
     *       title: 'hi',
     *       message: 'test',
     *     });
     *     // or
     *     const result = await v2.forums.topics.actions({
     *       type: 'reply',
     *       topic_id: 1888959,
     *       message: 'test'
     *     });
     *     //or
     *     const result = await v2.forums.topics.actions({
     *       type: 'edit_topic',
     * 
     *       topic_id: 986201,
     *       title: 'New title',
     * 
     *       post_id: 7270325,
     *       message: 'edited body/message',

     *     });
     *     // or
     *     const result = await v2.forums.topics.actions({
     *       type: 'edit_post',
     * 
     *       post_id: 9500788,
     *       message: 'asdsadsada',
     *     });
     *     if (result.error != null) {
     *       console.log(result.error);
     *       return;
     *     };
     * 
     *     console.log(result);
     *   } catch (error) {
     *     console.log(error);
     *   };
     * };
     * 
     * main();
     * ```
     *
     * &nbsp;
     *
     *
     * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.forums.topics.actions_v3) | [Check return types](../types/v2/forums_topics_actions_reply.ts)
     */
    actions: forums_topics_actions,
  },
  /**
   * ### `GET` [/v2/forums](https://osu.ppy.sh/docs/index.html#get-forum-listing)
   * `async` Retrieves a list of forums and subforums.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   * 
   *     const result = await v2.forums.list();
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.forums.list_v3) | [Check return types](../types/v2/forums_list.ts)
   */
  list: forums_list,
  /**
   * ### `GET` [/v2/forums/{id}](https://osu.ppy.sh/docs/index.html#get-forum-and-topics)
   * `async` Retrieves information about forum with subforums and list of recent, pinned topics.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID of the forum/subforum to retrieve.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   * 
   *     const result = await v2.forums.details({ id: 15 });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.forums.details_v3) | [Check return types](../types/v2/forums_details.ts)
   */
  details: forums_details,
};



import { search_all } from '../api/v2/search';

/**
 * ### `GET` [/v2/search](https://osu.ppy.sh/docs/index.html#search)
 * `async` Search for users and wiki pages.
 *
 * &nbsp;
 *
 * ### Global Parameters
 * - `params.type` - Type of search.
 * - `params.query?` - Query to search for.
 * - `addons?` - Additional parameters to include in the request.
 *
 * &nbsp;
 *
 * ### Parameters for `params.type:'site'`
 * - `params.location?` - Page to search on.
 * - `params.page?` - Page number of the search results.
 *
 * &nbsp;
 *
 * ### Parameters for `params.type:'beatmaps'`
 * - `params.mode?` - Gamemode to search for.
 * - `params._played?` - Unknown parameter description.
 * - `params._nsfw?` - Whether to include NSFW beatmaps.
 * - `params.status?` - Filter by status.
 * - `params.category?` - Filter by category.
 * - `params.genre?` - Filter by genre.
 * - `params.language?` - Filter by language.
 * - `params.achieved_rank?` - Filter by achieved rank.
 * - `params.extra?` - Filter by extra features.
 * - `params.sort?` - Sort the results.
 * - `params.cursor_string?` - Cursor string.
 *
 * &nbsp;
 *
 * ### Usage Example
 * ```js
 * const { auth, v2 } = require('osu-api-extended');
 * 
 * async function main() {
 *   try {
 *     await auth.login({
 *       type: 'v2',
 *       client_id: CLIENT_ID,
 *       client_secret: CLIENT_SECRET,
 *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
 *     });
 * 
 *     const result = await v2.search({
 *       type: 'site',
 *       mode: 'all',
 *       query: 'mrekk'
 *     });
 *     // or
 *     const result = await v2.search({
 *       type: 'beatmaps',
 *       query: 'hyikrwa'
 *     });
 *     if (result.error != null) {
 *       console.log(result.error);
 *       return;
 *     };
 * 
 *     console.log(result);
 *   } catch (error) {
 *     console.log(error);
 *   };
 * };
 * 
 * main();
 * ```
 *
 * &nbsp;
 *
 * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.search_v3) | [Check return types](../types/v2/search_all.ts)
 *
 */
export const search = search_all;



import { assets_backgrounds } from "../api/v2/assets_backgrounds";
import { assets_dataFiles } from "../api/v2/assets_dataFiles";


/**
 * ##### Description
 * Retrieve data from the assets API.
 */
export const assets = {
  /**
   * ### `GET` [/v2/seasonal-backgrounds](https://osu.ppy.sh/docs/index.html#get-apiv2seasonal-backgrounds)
   * `async` Retrieves seasonal or beatmap backgrounds.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Source of the background.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'beatmapset'`
   * - `params.set_id` - ID of the beatmapset.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     const result = await v2.assets.backgrounds({
   *       type: 'seasonal'
   *     });
   *     // or
   *     const result = v2.assets.backgrounds({
   *       type: 'beatmapset',
   *       set_id: 2130552,
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.assets.backgrounds_v3) | [Check return types](../types/v2/assets_backgrounds.ts)
   */
  backgrounds: assets_backgrounds,
  /**
   * ### `GET` `https://data.ppy.sh/`
   * `async` Retrieves all urls from the data API.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.assets.dataFiles();
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.assets.datafiles_v3) | [Check return types](../types/v2/assets_datafiles.ts)
   */
  dataFiles: assets_dataFiles
};



import { news_list } from "../api/v2/news_list";
import { news_details } from "../api/v2/news_details";


/**
 * ##### Description
 * Retrieve data from the news API.
 */
export const news = {
  /**
   * ### `GET` [/v2/news](https://osu.ppy.sh/docs/index.html#get-news-listing)
   * `async` Get a list of all the news based on certain criteria.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.from_year?` - Year to return posts from.
   * - `params.limit?` - Maximum number of posts to return.
   * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.news.list();
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.news.list_v3) | [Check return types](../types/v2/news_list.ts)
   */
  list: news_list,
  /**
   * ### `GET` [/v2/news/{news}](https://osu.ppy.sh/docs/index.html#get-news-post)
   * `async` Retrieves a single news post based on given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.query` - ID or slug of the news post.
   * - `params.key` - Type of the query.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.news.details({
   *       news_id: 1440,
   *       key: 'id'
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.news.details_v3) | [Check return types](../types/v2/news_details.ts)
   */
  details: news_details,
};




import { notifications_list } from '../api/v2/notifications_list';
import { notifications_actions } from '../api/v2/notifications_actions';


/**
 * ##### Description
 * Retrieve data from the notifications API.
 */
export const notifications = {
  /**
   * ### `GET` [/v2/notifications](https://osu.ppy.sh/docs/index.html#get-notifications)
   * `async` Retrieves a list of the user's unread notifications.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.max_id` - Maximum id fetched.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login: login,
   *       password: password,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.notifications.list();
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.notifications.list_v3) | [Check return types](../types/v2/notifications_list.ts)
   */
  list: notifications_list,
  /**
   * ### `POST` [/v2/notifications/mark-read](https://osu.ppy.sh/docs/index.html#mark-notifications-as-read)
   * `async` Perform certain actions via the notifications API.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Type of the action.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'mark_as_read'`
   * - `params.identities[].category?` - Category of the identity.
   * - `params.identities[].object_id?` Id of the object that triggered the notification.
   * - `params.identities[].object_type?` Type of the object that triggered the notification.
   * - `params.notifications[].category?` - Category of the notification.
   * - `params.notifications[].object_id?` Id of the object that triggered the notification.
   * - `params.notifications[].object_type?` Type of the object that triggered the notification.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * not working atm
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://osu.ppy.sh/docs/index.html#mark-notifications-as-read)
   */
  actions: notifications_actions,
};



import { ranking_list } from "../api/v2/ranking_list";


/**
 * ##### Description
 * Retrieve data from the ranking API.
 */
export const ranking = {
  /**
   * ### `GET` [/v2/rankings/{mode}/{type}](https://osu.ppy.sh/docs/index.html#get-ranking)
   * ### `GET` [/v2/rankings/kudosu](https://osu.ppy.sh/docs/index.html#get-kudosu-ranking)
   * `async` Retrieves a ranking list based on given parameters.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Type of ranking search.
   * - `params.page?` - Page number of the search results.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'charts'`
   * - `params.spotlight_id?` - ID of the spotlight.
   * - `params.mode?` - Gamemode to search for.
   * - `params.filter?` - Filter by type.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'country'`
   * - `params.mode?` - Gamemode to search for.
   * - `params.filter?` - Filter by type.
   *
   * &nbsp;
   *
   * #### Parameters for `params.type:'performance'`
   * - `params.mode?` - Gamemode to search for.
   * - `params.filter?` - Filter by type.
   * - `params.country_code?` - Country code to search for.
   * - `params.variant?` - Filter by mania variant.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'score'`
   * - `params.mode?` - Gamemode to search for.
   * - `params.filter?` - Filter by type.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.ranking.list({
   *       type: 'performance',
   *       // or
   *       type: 'charts',
   *       // or
   *       type: 'country',
   *       // or
   *       type: 'score',
   *       mode: 'osu'
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.ranking.list_v3) | [Check return types](../types/v2/ranking_list_performance.ts)
   */
  list: ranking_list,
};



import { spotlights_list } from "../api/v2/spotlights_list";


/**
 * ##### Description
 * Retrieve data from the spotlights API.
 */
export const spotlights = {
  /**
   * ### `GET` [/v2/spotlights](https://osu.ppy.sh/docs/index.html#get-spotlights)
   * `async` Retrieve a list of spotlights.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.spotlights.list();
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.spotlights.list_v3) | [Check return types](../types/v2/spotlights_list.ts)
   */
  list: spotlights_list,
};



import { wiki_details } from "../api/v2/wiki_details";


/**
 * ##### Description
 * Retrieve data from the wiki API.
 */
export const wiki = {
  /**
   * ### `GET` [/v2/wiki/{locale}/{path}](https://osu.ppy.sh/docs/index.html#get-wiki-page)
   * `async` Retrieve a wiki page or image data.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.locale` - Two-letter language code of the wiki page.
   * - `params.path_name` - Path of the wiki page.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * #### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     const result = await v2.wiki.details({
   *       locale: 'EN',
   *       path_name: 'Main_page'
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.wiki.details_v3) | [Check return types](../types/v2/wiki_details.ts)
   */
  details: wiki_details,
};



import { me_details } from "../api/v2/me_details";
import { me_friends } from "../api/v2/me_friends";
import { me_download_quota } from "../api/v2/me_download_quota";


/**
 * ##### Description
 * Retrieve data from the me API.
 */
export const me = {
  /**
   * ### `GET` [/v2/me/download-quota-check](https://osu.ppy.sh/docs/index.html#get-apiv2medownload-quota-check)
   * `async` Get your download quota. (requires lazer authentication)
   *
   * &nbsp;
   *
   * ### Parameters
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login,
   *       password
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.me.download_quota();
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.me.download_quota_v3) | [Check return types](../types/v2/me_download_quota.ts)
   */
  download_quota: me_download_quota,
  /**
   * ### `GET` [/v2/friends](https://osu.ppy.sh/docs/index.html#get-apiv2friends)
   * `async` Get a list of your friends. (requires lazer authentication)
   *
   * &nbsp;
   *
   * ### Parameters
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login,
   *       password
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.me.friends();
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.me.friends_v3) | [Check return types](../types/v2/me_friends.ts)
   */
  friends: me_friends,
  /**
   * ### `GET` [/v2/me/{mode?}](https://osu.ppy.sh/docs/index.html#get-own-data)
   * `async` Get your own data. (requires lazer authentication)
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.mode?` - Gamemode to search for.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.me.details();
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.me.details_v3) | [Check return types](../types/v2/me_details.ts)
   */
  details: me_details,
};



import { matches_list } from "../api/v2/matches_list";
import { matches_details } from "../api/v2/matches_details";


/**
 * ##### Description
 * Retrieve data from the matches API.
 */
export const matches = {
  /**
   * ### `GET` [/v2/matches](https://osu.ppy.sh/docs/index.html#get-apiv2matches)
   * `async` Get a list of matches.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.after_id` - ID of the match after which the matches will be returned.
   * - `params.limit?` - Maximum number of matches to return.
   * - `params.sort?` - Sort order of the matches.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.matches.list({
   *       limit: 10,
   *       sort: 'id_asc'
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.matches.list_v3) | [Check return types](../types/v2/matches_list.ts)
   */
  list: matches_list,
  /**
   * ### `GET` [/v2/matches/{match}](https://osu.ppy.sh/docs/index.html#get-apiv2matchesmatch)
   * `async` Get a match by certain criteria.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.match_id` - ID of the match.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'v2',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     await v2.matches.details({ match_id: 16155689 });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.matches.details_v3) | [Check return types](../types/v2/matches_details.ts)
   */
  details: matches_details,
};



import { chat_channels_list } from "../api/v2/chat_channels_list";

import { chat_messages } from "../api/v2/chat_messages";
import { chat_updates } from "../api/v2/chat_updates";
import { chat_details } from "../api/v2/chat_details";
import { chat_actions } from "../api/v2/chat_actions";


/**
 * ##### Description
 * Retrieve data from the chat API.
 */
export const chat = {
  /**
   * ##### Description
   * Covers API endpoints related to chat channels.
   */
  channels: {
    /**
     * ### `GET` [/v2/chat/channels](https://osu.ppy.sh/docs/index.html#get-channel-list)
     * `async` Retrieves a list of all joinable public channels. (Requires lazer authentication)
     *
     * &nbsp;
     *
     * ### Parameters
     * - `addons?` - Additional parameters to include in the request.
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * const { auth, v2 } = require('osu-api-extended');
     * 
     * async function main() {
     *   try {
     *     await auth.login({
     *       type: 'v2',
     *       client_id: CLIENT_ID,
     *       client_secret: CLIENT_SECRET,
     *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
     *     });
     * 
     *     const result = await v2.chat.channels.list();
     *     if (result.error != null) {
     *       console.log(result.error);
     *       return;
     *     };
     * 
     *     console.log(result);
     *   } catch (error) {
     *     console.log(error);
     *   };
     * };
     * 
     * main();
     * ```
     *
     * &nbsp;
     *
     * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.chat.channels.list_v3) | [Check return types](../types/v2/chat_channels_list.ts)
     */
    list: chat_channels_list,
  },
  /**
   * ### `GET [/v2/chat/channels/{channel}/messages](https://osu.ppy.sh/docs/index.html#get-channel-messages)
   * `async` Get a list of messages in a channel. (Requires lazer authentication)
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.channel_id` - The ID of the channel.
   * - `params.limit?` - Maximum number of messages to return.
   * - `params.since?` - Message id to start returning messages from.
   * - `params.until?` - Message id to end returning messages from.
   * - `params.return_object?` - Whether to return object.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login,
   *       password
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.chat.messages({ id: 24594482 });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.chat.messages_v3) | [Check return types](../types/v2/chat_messages.ts)
   */
  messages: chat_messages,
  /**
   * ### `GET` [/v2/chat/updates](https://osu.ppy.sh/docs/index.html#get-updates)
   * `async` Retrieves the list of channels the current User is in. (Requires lazer authentication)
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.after_id` - ID of the channel after which the channels will be returned.
   * - `params.includes` - List of fields to include in the response.
   * - `params.history_since` - Silence history since this id.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login,
   *       password
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.chat.updates({
   *       after_id: 3641891943,
   *       includes: ['presence', 'silences']
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.chat.updates_v3) | [Check return types](../types/v2/chat_updates.ts)
   */
  updates: chat_updates,
  /**
   * ### `GET` [/v2/chat/channels/{channel}](https://osu.ppy.sh/docs/index.html#get-channel)
   * `async` Get a specific channel. (Requires lazer authentication)
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.channel_id` - The ID of the channel.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login,
   *       password
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.chat.details({ channel_id: 24594482 });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.chat.details_v3) | [Check return types](../types/v2/chat_details.ts)
   */
  details: chat_details,
  /**
   * ### `POST` [/v2/chat/new](https://osu.ppy.sh/docs/index.html#create-new-pm)
   * ### `POST` [/v2/chat/ack](https://osu.ppy.sh/docs/index.html#chat-keepalive)
   * ### `POST` [/v2/chat/channels](https://osu.ppy.sh/docs/index.html#create-channel)
   * ### `POST` [/v2/chat/channels/{channel}/messages](https://osu.ppy.sh/docs/index.html#send-message-to-channel)
   * ### `PUT` [/v2/chat/channels/{channel}/users/{user}](https://osu.ppy.sh/docs/index.html#join-channel)
   * ### `DELETE` [/v2/chat/channels/{channel}/users/{user}](https://osu.ppy.sh/docs/index.html#leave-channel)
   * ### `PUT` [/v2/chat/channels/{channel}/mark-as-read/{message}](https://osu.ppy.sh/docs/index.html#mark-channel-as-read)
   * `async` Performs a set of actions on channels pr PM's. (Requires lazer or cli authentication)
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Type of action to perform.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type: 'send_pm'`
   * - `params.is_action` - Whether the message is an action
   * - `params.user_id` - The ID of the user.
   * - `params.message` - The message to send.
   * - `params.uuid` - client-side message identifier which will be sent back in response and websocket json.
   * 
   * &nbsp;
   *
   * ### Parameters for `params.type: 'send_channel'`
   * - `params.id` - The IDs of the channel to send to.
   * - `params.message` - The message to send.
   * - `params.is_action` - Whether the message is an action.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type: 'send_announce'`
   * - `params.users_ids[]` - The IDs of the users.
   * - `params.message` - The message to send.
   * - `params.channel_name` - Channel name.
   * - `params.channel_description` - Description of the channel.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type: 'join' | 'leave'`
   * - `params.id` - The ID of the channel.
   * - `params.user_id` - The ID of the user.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type: 'read'`
   * - `params.channel_id` - The ID of the channel.
   * - `params.message_id` - The ID of the user.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type: 'keepalive'`
   * - `params.history_since` - The ID of the message to return `UserSilences`.
   * - `params.since` - The ID of the message to return `UserSilences`.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login: login,
   *       password: password,
   *       cachedTokenPath: './lazer.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   *     // or
   *     await auth.login({
   *       type: 'cli',
   *       client_id: CLIENT_ID,
   *       client_secret: CLIENT_SECRET,
   *       redirect_url: REDIRECT_URL,
   *       scopes: ['public', 'chat.read', 'chat.write', 'chat.write_manage'],
   *       cachedTokenPath: './cli.json' // path to a file where will be stored auth token to prevent spam auth to osu
   *     });
   * 
   * 
   *     const result = await v2.chat.actions({
   *       type: 'send_pm',
   *       is_action: false,
   *       user_id: 2070907,
   *       message: '/np',
   *     });
   *     // or
   *     const result = await v2.chat.actions({
   *       type: 'send_channel',
   * 
   *       is_action: false,
   *       channel_id: 24594482,
   *       message: '.'
   *     });
   *     // or
   *     const result = await v2.chat.actions({
   *       type: 'send_announce',
   * 
   *       ids: [17063658],
   *       channel_name: 'test api',
   *       channel_description: 'a description for test',
   *       message: 'hello, testing api lib'
   *     });
   *     // or
   *     const result = await v2.chat.actions({
   *       type: 'join',
   * 
   *       channel_id: 55,
   *       user_id: 9893708,
   *     });
   *     // or
   *     const result = await v2.chat.actions({
   *       type: 'leave',
   * 
   *       channel_id: 55,
   *       user_id: 9893708,
   *     });
   *     // or
   *     const result = await v2.chat.actions({
   *       type: 'read',
   *       channel_id: 56888139,
   *     });
   *     // or
   *     const result = await v2.chat.actions({
   *       type: 'keepalive',
   *       since: 3769165698,
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.chat.channels.actions_v3)
   */
  actions: chat_actions,
};



import { session_actions } from "../api/v2/session_actions";

/**
 * ##### Description
 * Retrieve data from the session API.
 */
export const session = {
  /**
   * ### `POST` [/v2/session/verify](https://osu.ppy.sh/docs/index.html#post-apiv2sessionverify)
   * ### `POST` [/v2/session/verify/reissue](https://osu.ppy.sh/docs/index.html#post-apiv2sessionverifyreissue)
   * ### `DELETE` [/v2/oauth/tokens/current](https://osu.ppy.sh/docs/index.html#revoke-current-token)
   * `async` Perform session actions via endpoint.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.type` - Type of the action to perform.
   * - `params.code` - verification code from email (only for `params.type: verify`)
   * - `addons` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login,
   *       password,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.session.actions({
   *       type: 'verify',
   *       code: '7aah1f7e'
   *     });
   *     // or
   *     const result = await v2.session.actions({
   *       type: 'reissue',
   *     });
   *     // or
   *     const result = await v2.session.actions({
   *       type: 'delete',
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.session.actions_v3)
   */
  actions: session_actions,
};



import { rooms_list } from "../api/v2/rooms_list";
import { rooms_details } from "../api/v2/rooms_details";
import { rooms_leaderboard } from "../api/v2/rooms_leaderboard";
import { rooms_scores } from "../api/v2/rooms_scores";

/**
 * ##### Description
 * Retrieve data from the rooms API.
 */
export const rooms = {
  /**
   * ### `GET` [/v2/rooms](https://osu.ppy.sh/docs/index.html#get-multiplayer-rooms)
   * `async` Retrieve a list of multiplayer rooms.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.type?` - Type of rooms to retrieve.
   * - `params.status?` - Status of the rooms to retrieve.
   * - `params.query?` - Query to search for.
   * - `params.limit?` - Number of rooms to return.
   * - `params.sort?` - Sort order of the rooms.
   * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login,
   *       password,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.rooms.list({
   *       type: 'realtime',
   *       query: 'te',
   *     });
   *     // or
   *     const result = await v2.rooms.list({
   *       type: 'playlists',
   *       query: 'te',
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.rooms.list_v3) | [Check return types](../types/v2/rooms_list.ts)
   */
  list: rooms_list,
  /**
   * ### `GET` [/v2/rooms/{room}/playlist/{playlist}/scores](https://osu.ppy.sh/docs/index.html#get-scores)
   * ### `GET` [/v2/rooms/{room}/playlist/{playlist}/scores/{score}](https://osu.ppy.sh/docs/index.html#get-a-score)
   * ### `GET` [/v2/rooms/{room}/playlist/{playlist}/scores/users/{user}](https://osu.ppy.sh/docs/index.html#get-user-high-score)
   * `async` Retrieve a list of scores from playlists.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Type of retrieval.
   * - `params.id` - ID of the room.
   * - `params.playlist_id` - ID of the playlist.
   *
   * ### Parameters for `params.type: 'all'`
   * - `params.limit?` - Maximum number of scores to return.
   * - `params.sort?` - Sort order of the scores.
   * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login,
   *       password,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.rooms.scores({
   *       type: 'all',
   * 
   *       id: 582709,
   *       playlist_id: 5302678,
   *     });
   *     // or
   *     const result = await v2.rooms.scores({
   *       type: 'single',
   * 
   *       id: 582709,
   *       playlist_id: 5302678,
   *       score_id: 2414452489,
   *     });
   *     // or
   *     const result = await v2.rooms.scores({
   *       type: 'user_highest',
   * 
   *       id: 582709,
   *       playlist_id: 5302678,
   *       user_id: 35015585,
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.rooms.scores_v3) | [Check return types](../types/v2/rooms_scores_all.ts)
   */
  scores: rooms_scores,
  /**
   * ### `GET` [/v2/rooms/{room}](https://osu.ppy.sh/docs/index.html#get-apiv2roomsroom)
   * `async` Retrieve a room by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID of the room to retrieve.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login,
   *       password,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.rooms.details({
   *       id: 582709,
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.rooms.details_v3) | [Check return types](../types/v2/rooms_details.ts)
   */
  details: rooms_details,
  /**
   * ### `GET` [/v2/rooms/{room}/leaderboard](https://osu.ppy.sh/docs/index.html#get-apiv2roomsroomleaderboard)
   * `async` Retrieve a leaderboard from a room.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID of the room.
   * - `params.limit?` - Maximum number of scores to return.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { auth, v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     await auth.login({
   *       type: 'lazer',
   *       login,
   *       password,
   *       cachedTokenPath: './test.json' // path to the file your auth token will be saved (to prevent osu!api spam)
   *     });
   * 
   *     const result = await v2.rooms.leaderboard({
   *       id: 582265,
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.rooms.leaderboard_v3) | [Check return types](../types/v2/rooms_leaderboard.ts)
   */
  leaderboard: rooms_leaderboard,
};



import { groups_details } from "../api/v2/groups_details";
import { groups_history } from "../api/v2/groups_history";

/**
 * ##### Description
 * Retrieve data from the groups API.
 */
export const groups = {
  /**
   * ### `GET` /groups/{id}
   * `async` Retrieves a list of users by given group id.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - Group id.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     const result = await v2.groups.details({
   *       id: '32'
   *     });
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.groups.details_v3) | [Check return types](../types/v2/groups_details.ts)
   */
  details: groups_details,
  /**
   * ### `GET` /groups/history
   * `async` Retrieves a groups history
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.user?` - User id or name
   * - `params.group?` - Group indentifier
   * - `params.sort?` - id_asc or id_desc
   * - `params.max_date?` - Max date in ISOString format
   * - `params.min_date?` - Min date in ISOString format
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * const { v2 } = require('osu-api-extended');
   * 
   * async function main() {
   *   try {
   *     const result = await v2.groups.history();
   *     if (result.error != null) {
   *       console.log(result.error);
   *       return;
   *     };
   * 
   *     console.log(result);
   *   } catch (error) {
   *     console.log(error);
   *   };
   * };
   * 
   * main();
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://github.com/cyperdark/osu-api-extended/wiki/v2.groups.history_v3) | [Check return types](../types/v2/groups_history.ts)
   */
  history: groups_history,
}