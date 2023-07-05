import { AppLinks } from "@/types/app-links";

// icons
import { RiLinkedinFill as linkedin } from "react-icons/ri";
import {FaGithub as github, FaTwitter as twitter} from 'react-icons/fa'
import {AiFillInstagram as instagram, AiFillFacebook as facebook} from 'react-icons/ai'


const footerApplicationLinks: AppLinks[] = [
    {
        label: 'Accueil',
        baseUrl: '/',
        type: 'internal'
    },
    {
        label: 'Projets',
        baseUrl: '#',
        type: 'internal'
    },
    {
        label: 'GamerBike',
        baseUrl: '#',
        type: 'internal'
    },
    {
        label: 'Contact',
        baseUrl: '#',
        type: 'external'
    }
]

 const footerUserLinks: AppLinks[] = [
    {
        label: 'Mon espace',
        baseUrl: '#',
        type: 'internal'
    },
    {
        label: 'Connexion',
        baseUrl: '/connexion',
        type: 'internal'
    },
    {
        label: 'Inscription',
        baseUrl: "/connexion/inscription",
        type: 'internal'
    },
    {
        label: 'Mot de passe oublié',
        baseUrl: "/connexion/mot-de-passe-perdu",
        type: 'internal'
    }
]

 const footerInfoLinks: AppLinks[] = [
    {
        label: 'CGU',
        baseUrl: '/cgu',
        type: 'internal'
    },
    // {
    //     label: 'Confidentiatlité',
    //     baseUrl: '#',
    //     type: 'internal'
    // },
    {
        label: 'A propos',
        baseUrl: '/about',
        type: 'internal'
    }
]

export const footerSocialLinks: AppLinks[] = [
    {
        label: 'Instagram',
        baseUrl: 'https://www.instagram.com/montpoupetbikepark/',
        type: 'external',
        icon : instagram
    },
    {
        label: 'Facebook',
        baseUrl: 'https://fr-fr.facebook.com/montpoupetbikepark/',
        type: 'external',
        icon : facebook,
    },
]

export const footerLinks = [
    {
        label: 'Informations',
        links: footerInfoLinks
    },
    {
        label: 'Réseaux',
        links: footerSocialLinks
    },
    
]