/**
 * Asset Loader for Repertoires
 *
 * Behavior:
 * - Uses `poster.*` as cover image when available
 * - Uses `reel.*` as first local media when available
 * - Loads all remaining supported media files regardless of name
 * - Sorts files alphabetically for stable ordering
 */

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'heic'];
const VIDEO_EXTENSIONS = ['mp4', 'mov', 'webm', 'm4v', 'ogg'];
const AUDIO_EXTENSIONS = ['mp3', 'wav', 'm4a', 'aac', 'oga'];
const RAW_EXTENSIONS = ['arw'];

const getExtension = (fileKey) => {
  const ext = fileKey.split('.').pop();
  return (ext || '').toLowerCase();
};

const getBaseName = (fileKey) => {
  const name = fileKey.split('/').pop() || '';
  return name.replace(/\.[^/.]+$/, '').toLowerCase();
};

const classifyMediaType = (fileKey) => {
  const ext = getExtension(fileKey);
  if (IMAGE_EXTENSIONS.includes(ext)) return 'image';
  if (VIDEO_EXTENSIONS.includes(ext)) return 'video';
  if (AUDIO_EXTENSIONS.includes(ext)) return 'audio';
  if (RAW_EXTENSIONS.includes(ext)) return 'file';
  return null;
};

const createCaption = (fileKey) => {
  const name = (fileKey.split('/').pop() || '')
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim();
  if (!name) return 'Media highlight';
  return name.charAt(0).toUpperCase() + name.slice(1);
};

/**
 * Load all assets for a repertoire folder
 * @param {string} folderPath - Relative path like 'assets/images/yakshagana/repertoire/vaali'
 * @returns {{poster: string | null, reelUrl: string | null, mediaItems: Array}}
 */
export const loadRepertoireAssets = (folderPath) => {
  try {
    // Use require.context for dynamic imports in Create React App.
    // Keep this regex aligned with supported media extensions.
    const context = require.context(
      '../assets/images/yakshagana/repertoire',
      true,
      /\.(jpg|jpeg|png|gif|webp|avif|heic|arw|mp4|mov|webm|m4v|ogg|mp3|wav|m4a|aac|oga)$/i
    );

    // Extract folder name (e.g., 'vaali' from full path)
    const folderName = folderPath.split('/').pop();

    const allFilesInFolder = context
      .keys()
      .filter(
        (key) => key.startsWith(`./${folderName}/`) && key.split('/').length >= 3
      )
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    const posterFile = allFilesInFolder.find((key) => getBaseName(key) === 'poster');
    const reelFile = allFilesInFolder.find((key) => getBaseName(key) === 'reel');

    const poster = posterFile ? context(posterFile) : null;
    const reelUrl = reelFile ? context(reelFile) : null;

    const filesWithoutPoster = allFilesInFolder.filter((key) => key !== posterFile);

    const orderedFiles = reelFile
      ? [reelFile, ...filesWithoutPoster.filter((key) => key !== reelFile)]
      : filesWithoutPoster;

    const mediaItems = orderedFiles
      .map((key) => {
        const type = classifyMediaType(key);
        if (!type) return null;
        return {
          type,
          src: context(key),
          caption: createCaption(key),
          alt: createCaption(key),
          ...(type === 'video' ? { poster } : {})
        };
      })
      .filter(Boolean);

    const result = {
      poster,
      reelUrl,
      mediaItems
    };

    console.log(`[RepertoireAssets] Loaded ${folderName}: ${result.poster ? 1 : 0} poster, ${result.mediaItems.length} media`);
    return result;
  } catch (error) {
    console.error(`[RepertoireAssets] Error loading assets for folder:`, folderPath, error);
    return { poster: null, reelUrl: null, mediaItems: [] };
  }
};

/**
 * Alternative: Import specific image directly
 * This is used if you want to manually specify imports in a config file
 */
export const createAssetManifest = (poster, mediaItems = []) => {
  return {
    poster,
    mediaItems: Array.isArray(mediaItems) ? mediaItems : []
  };
};
