export const formatarEventSlug = (slug: string): string => {
  return slug.replace(/ /g, "-").toLowerCase();
};
