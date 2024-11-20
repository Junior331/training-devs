export const formatEventSlug = (slug: string): string => {
  return slug.replace(/ /g, "-").toLowerCase();
};
