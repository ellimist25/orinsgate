/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [

    // Actor Sheet Partials
    "systems/orinsgate/templates/actors/parts/actor-traits.html",
    "systems/orinsgate/templates/actors/parts/actor-inventory.html",
    "systems/orinsgate/templates/actors/parts/actor-features.html",
    "systems/orinsgate/templates/actors/parts/actor-powerbook.html",

    // Item Sheet Partials
    "systems/orinsgate/templates/items/parts/item-action.html",
    "systems/orinsgate/templates/items/parts/item-activation.html",
    "systems/orinsgate/templates/items/parts/item-description.html",
    "systems/orinsgate/templates/items/parts/item-mountable.html"
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
