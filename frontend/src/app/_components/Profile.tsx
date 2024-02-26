import { getServerAuthSession } from "~/server/auth"

export default async function Profile() {
    const session = await getServerAuthSession();
    return (
      <div className="w-full py-6 space-y-6 lg:py-12">
        <div className="container grid max-w-2xl gap-6 px-4 md:gap-10 lg:grid-cols-profile lg:max-w-5xl xl:gap-14 xl:px-6">
          <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-4">
            <div className="rounded-full overflow-hidden border-4 border-gray-100">
              <img
                alt="Profile"
                className="rounded-full object-cover"
                height="128"
                src={"/placeholder.svg"}
                style={{
                  aspectRatio: "128/128",
                  objectFit: "cover",
                }}
                width="128"
              />
            </div>
            <div className="space-y-1 text-center lg:text-left">
              <h1 className="text-2xl font-bold">jessicadavis</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer. Coffee Lover. Travel Addict.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
            <div className="aspect-[1/1] rounded-lg overflow-hidden">
              <img
                alt="Post"
                className="object-cover object-center"
                height="500"
                src="data:image/jpeg;base64,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"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }