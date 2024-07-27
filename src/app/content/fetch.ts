export const contentGQLQuery = async <T>({
  query,
  variables = {},
  tags = [],
  preview = false,
  revalidate,
}: {
  query: string
  variables?: any
  tags?: string[]
  preview?: boolean
  revalidate?: number
}): Promise<T | undefined> => {
  const res = await fetch(
    `https://your-payload-cms-url.com/api/graphql`, // Update with your Payload CMS URL
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PAYLOAD_CMS_ACCESS_TOKEN}`, // Update with your Payload CMS access token
      },
      body: JSON.stringify({ query, variables }),
      next: { tags, ...{ revalidate } },
    }
  )

  const { data, errors } = await res.json()
  if (errors) {
    console.error(errors)
    throw new Error("error")
  }

  return data as T
}