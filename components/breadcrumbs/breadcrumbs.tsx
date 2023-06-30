import { Typography } from "@/ui/design-system/typography/typography"
import clsx from "clsx"
import { useRouter } from "next/router"
import { RiHome3Line } from "react-icons/ri"
import { v4 as uuidv4 } from "uuid"
import { Container } from "../container/container"
import Link from "next/link"


export const Breadcrumbs = () => {

    const router = useRouter()
    const asPath = router.asPath

    const segments = asPath.split("/")
    segments[0] = "accueil"
    const lastSegment = segments[segments.length - 1]

    const view = segments.map((path, index) => {
        return (
        <div key={uuidv4()}>
            <Link href={
                // path === "accueil" ? "/" : `/${path}`
                index > 0 ? '/' + segments.slice(1, index + 1).join('/') : '/'
            }>
            <Typography variant="caption3" component="span"
            className={clsx(
                path === lastSegment ? "text-gray" : "text-gray-600",
                'capitalize hover:text-gray' 
            )}>
             {path === "accueil" ? <RiHome3Line className="inline -mt-1" /> : path.replace(/-/g, " ")}
             </Typography>
            <Typography variant="caption2" component="span" className="ml-2 text-gray-600">
                {path === lastSegment ? "" : "/"}
            </Typography>
            </Link>
        </div>)
    })
    
    
    return (
        <Container className="flex gap-2 my-7 items-center">
        {view}
        </Container>
    )
}