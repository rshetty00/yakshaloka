/**
 * Asset Loader for Repertoires
 * 
 * Dynamically loads images from repertoire folders following naming convention:
 * - poster.{jpg|png} → Hero poster
 * - still-##.{jpg|png} → Performance stills (sorted numerically)
 * 
 * Usage:
 * const assets = loadRepertoireAssets('vaali');
 * console.log(assets.poster); // Path to poster image
 * console.log(assets.stills); // Array of still image paths
 */

/**
 * Load all assets for a repertoire folder
 * @param {string} folderPath - Relative path like 'assets/images/yakshagana/repertoire/vaali'
 * @returns {Object} { poster, stills }
 */
export const loadRepertoireAssets = (folderPath) => {
  try {
    // Use require.context for dynamic imports in Create React App
    const context = require.context(
      '../assets/images/yakshagana/repertoire',
      true,
      /\.(jpg|jpeg|png|gif)$/i
    );

    // Extract folder name (e.g., 'vaali' from full path)
    const folderName = folderPath.split('/').pop();

    // Find all files in this repertoire folder
    const posterFiles = context
      .keys()
      .filter(
        (key) =>
          key.startsWith(`./${folderName}/`) &&
          (key.includes('poster') || key.includes('Poster'))
      );

    const stillFiles = context
      .keys()
      .filter(
        (key) =>
          key.startsWith(`./${folderName}/`) &&
          key.includes('still') &&
          !key.includes('poster')
      )
      .sort((a, b) => {
        // Extract numbers from filenames and sort numerically
        const numA = parseInt(a.match(/\d+/)?.[0] || 0, 10);
        const numB = parseInt(b.match(/\d+/)?.[0] || 0, 10);
        return numA - numB;
      });

    // Build result object
    const result = {
      poster: posterFiles.length > 0 ? context(posterFiles[0]) : null,
      stills: stillFiles.map((key) => context(key))
    };

    console.log(`[RepertoireAssets] Loaded ${folderName}: 1 poster, ${result.stills.length} stills`);
    return result;
  } catch (error) {
    console.error(`[RepertoireAssets] Error loading assets for folder:`, folderPath, error);
    return { poster: null, stills: [] };
  }
};

/**
 * Alternative: Import specific image directly
 * This is used if you want to manually specify imports in a config file
 */
export const createAssetManifest = (poster, stills = []) => {
  return {
    poster,
    stills: Array.isArray(stills) ? stills : []
  };
};
