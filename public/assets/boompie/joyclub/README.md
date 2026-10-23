# The Boompie Joy Club — V2

Copy `app/`, `components/`, and `public/` into the project root, merging existing directories.

## Changes
- Separate shopper image and title graphic in hero.
- All descriptive copy is HTML text.
- Pink background extends behind the signup form.
- Signup overlaps the Member Perks section.
- Three heading artworks are standalone SVG graphics.
- Community photos have been recropped from the approved original mockup and exported as larger WebP files. These are upscaled crops, not new high-resolution source photographs.
- Uses the existing `/api/newsletter` endpoint; ensure your backend supports the optional fields if you wish to save them.

## Asset paths
All assets must reside in `public/assets/boompie/joyclub/`, and be accessible at `/assets/boompie/joyclub/<filename>`.

## Note
The photo assets are reference-derived illustrative placeholders. For genuinely high-resolution photography, replace `joy-shopper.webp` and the five `polaroid-*.webp` files with original high-resolution images under the same names.
