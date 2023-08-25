import loadPhotos from "@/utils/loadPhotos/loadPhotos";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const photos = await loadPhotos();

  return (
    <section>
      <div className="container mx-auto px-2 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-4  items-center justify-center gap-5">
          {
            photos.map(({ id, title, body }) => <div key={id} className="my-5">
              {/* <Image width={100} height={100} placeholder="blur" blurDataURL="data:image/webp;base64,UklGRqYFAABXRUJQVlA4WAoAAAAgAAAAFQIAqgEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgguAMAAJBBAJ0BKhYCqwE+7Xa4VqmnJSOgCAEwHYlpbuFoDwKV409iKgHhrp1Y9AAnsA99snIe+2TkPfbJyHvtk5D32ydpdjaHzrpPeJdry0hguRPYRtsLmuGK37u7vt7IfLVhPjc2qMh4irX8hpKVfAYtmeOTHyv236Vgb//3qW8zAM/SHFkbSCPqJZh8JKl8dIf/gqqO/V8FiLQhCe4f/N0xhy2Zsd//s7VTI+dHhmOQsKAPfeSjHO69I+dUXpFQ8AqzFD34AbtGGYYFUNbT1/y0eOsm2XVGhC0wXY1pv4v6z8PnFuKrUIZsGcga29rFfCvqu8FlkPEOZMld/d8m3/scoyQ7GBY8kJ+5wC8XRHWKw3gH2qxigOCsfbnyCtiEFrGRB4I74geWWJpdgm5YGrJawClq3OMtdVfbOM9J4+Ghu89IBqRoFku14uT1iR2OucK4e+x9a9qcxagWS7Xj3+ztMPysVu1ypN1xJyHvtk8NpMxZTuKds27VQ5L32ych7+6cE8iWPKnbZpCcNXaVAsl2vL79ScK/XfekJ6jGJcnIe+2ToyfR6o7TWiVTh47FLSoFku14ucX1mQg/Aut7ZOQ99snIfbehTSH1sM5TlAYB77ZOQ+C+tRHUWDLiq48FbtKgWS7Xi5u+yJsIcldkrpLT2ych77ZOQ+hqU9xfOTYsp7JyHvtk5D32zGWsl0rC5XWkF2lQLJSAAP74Ve/K2adhZ5Wa9pMRT8lxSIR+bnUFGjyTOkzH+5xTHZC3OsobLhAgPBxVnOEaCY71P9wvBz5SHsw7jyyRpAajj+ow8ADJqxgbcjNgv2od5RDYseO9eSmFw4wPtfOKKlGTr0giXB/NMUBeUS1qrimubWhN+unWHb/Eear4h7yW+olhnk3d2um+zH+tCM3weCRCOyuAsE0ss+T35jl5tQEsujHQfvPQ720tKzmEqrbWGMqnkRJXcn4q6PiI9p2T+gEOlIZxh0gucr2cnMd5Rm/VlNy0ln3HrpXMoETm8VDo6Nb346HlV/a4EA/kC8PDkv39kGtjV6nLdhefh9Cwra9UL00rV1pM8L/pqZeR1l2uF+R1nnw2Dp9oo5y/VlNKx8xMxV2DQJmkySlzEHbh4WI7ZCrc4ml9yX8QGzF4EEjXLv9ji8KCT6RNwA2AFiBMmT6ICJqtRYK2WrwgDTT6Og0fgJsLvAAAA7w3FXKwDVhhNF8Ge804MTXmvYCuItkJcsiABPZwjrPUcAaSOpKUc2OgJD/oVQ7oACIXnEghiAAAAAA=" src={url} alt="loading..." />
              <h1>{title}</h1> */}
              <h1>{title}</h1>
              <p className="my-5">{body}</p>
              <Link className="bg-blue-700 px-5 py-2 my-5 rounded" href={`/gallery/${id}`}>Details</Link>
            </div>)
          }
        </div>
      </div>
    </section>
  );
}

export default page;