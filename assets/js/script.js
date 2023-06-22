/* Main script */

/* Cursor */
document.addEventListener('DOMContentLoaded', () => {
    const circleCursor = document.getElementById('circle-cursor');
    const subtitle = document.getElementById('subtitle-init');    

    const elementsToHover = document.querySelectorAll('.element-to-hover');

    function handleElementHover(element) {
        element.classList.add('expand');
        circleCursor.classList.add('expand');
        subtitle.classList.add('v-hidden');
        subtitle.classList.remove('visible');

    }

    function handleElementHoverExit(element) {
        element.classList.remove('expand');
        circleCursor.classList.remove('expand');
        subtitle.classList.remove('v-hidden');
        subtitle.classList.add('visible');
    }

    elementsToHover.forEach((element) => {
        element.addEventListener('mouseover', () => handleElementHover(element));
        element.addEventListener('mouseout', () => handleElementHoverExit(element));
    });

    document.addEventListener('mousemove', (e) => {
        const circleCursor = document.querySelector('.circle-cursor');
        circleCursor.style.left = e.clientX + 'px';
        circleCursor.style.top = e.clientY + 'px';
    });

    /* CTA actions */
    const imgElementsPoetry = document.querySelectorAll('.img-poetry');
    const logoPoetry = document.getElementById('logo-poetry');
    
    const imgElementsGithub = document.querySelectorAll('.img-dev');
    const logoGithub = document.getElementById('logo-github');
    
    const imgElementsFighter = document.querySelectorAll('.img-fight');
    const logoFighter = document.getElementById('logo-fighter');

    const imgElementsDribbble = document.querySelectorAll('.img-dribbble');
    const logoDribbble = document.getElementById('logo-dribbble');

    const poeteCta = document.getElementById('cta-1');
    const githubCta = document.getElementById('cta-2');
    const fighterCta = document.getElementById('cta-3');
    const dribbbleCta = document.getElementById('cta-4');

    const linkCtaPoetry = document.getElementById('link-cta-poetry');
    const linkCtaGithub = document.getElementById('link-cta-github');
    const linkCtaFighter = document.getElementById('link-cta-fighter');
    const linkCtaDribbble = document.getElementById('link-cta-dribbble');

    /* Poesie */
    function handlePoetryHover() {
        circleCursor.classList.add('poetry-hovering');
        linkCtaPoetry.classList.remove('v-hidden');
        logoPoetry.classList.add('active');
        imgElementsPoetry.forEach((element) => {
            element.classList.remove('v-hidden');
            element.classList.add('visible');
        });
    }
    
    function handlePoetryHoverExit() {
        circleCursor.classList.remove('poetry-hovering');
        linkCtaPoetry.classList.add('v-hidden');
        logoPoetry.classList.remove('active');
        imgElementsPoetry.forEach((element) => {
            element.classList.remove('visible');
            element.classList.add('v-hidden');
        });
    }
    
    /* Github */
    function handleGithubHover() {
        circleCursor.classList.add('github-hovering');
        linkCtaGithub.classList.remove('v-hidden');
        logoGithub.classList.add('active');
        imgElementsGithub.forEach((element) => {
            element.classList.remove('v-hidden');
            element.classList.add('visible');
        });
    }
    
    function handleGithubHoverExit() {
        circleCursor.classList.remove('github-hovering');
        linkCtaGithub.classList.add('v-hidden');
        logoGithub.classList.remove('active');
        imgElementsGithub.forEach((element) => {
            element.classList.remove('visible');
            element.classList.add('v-hidden');
        });
    }
    
    /* Fighter */
    function handleFighterHover() {
        circleCursor.classList.add('fighter-hovering');
        linkCtaFighter.classList.remove('v-hidden');
        logoFighter.classList.add('active');
        imgElementsFighter.forEach((element) => {
            element.classList.remove('v-hidden');
            element.classList.add('visible');
        });
    }
    
    function handleFighterHoverExit() {
        circleCursor.classList.remove('fighter-hovering');
        linkCtaFighter.classList.add('v-hidden');
        logoFighter.classList.remove('active');
        imgElementsFighter.forEach((element) => {
            element.classList.remove('visible');
            element.classList.add('v-hidden');
        });
    }

    /* Dribbble */
    function handleDribbbleHover() {
        circleCursor.classList.add('dribbble-hovering');
        linkCtaDribbble.classList.remove('v-hidden');
        logoDribbble.classList.add('active');
        imgElementsDribbble.forEach((element) => {
            console.log(element)
            element.classList.remove('v-hidden');
            element.classList.add('visible');
        });
    }
    
    function handleDribbbleHoverExit() {
        circleCursor.classList.remove('dribbble-hovering');
        linkCtaDribbble.classList.add('v-hidden');
        logoDribbble.classList.remove('active');
        imgElementsDribbble.forEach((element) => {
            element.classList.remove('visible');
            element.classList.add('v-hidden');
        });
    }

    function handleLinkOnCtaHover() {
        // Changer l'image du curseur
        circleCursor.style.display = 'none';
    }
    function handleLinkOnCtaExit() {
        // Changer l'image du curseur
        circleCursor.style.display = 'block';
    }

    /* Poete CTA + links */
    poeteCta.addEventListener('mouseover', handlePoetryHover);
    poeteCta.addEventListener('mouseout', handlePoetryHoverExit);
    linkCtaPoetry.addEventListener('mouseover', handleLinkOnCtaHover);
    linkCtaPoetry.addEventListener('mouseout', handleLinkOnCtaExit);

    /* Github CTA */
    githubCta.addEventListener('mouseover', handleGithubHover);
    githubCta.addEventListener('mouseout', handleGithubHoverExit);
    linkCtaGithub.addEventListener('mouseover', handleLinkOnCtaHover);
    linkCtaGithub.addEventListener('mouseout', handleLinkOnCtaExit);
    
    /* Fighter CTA */
    fighterCta.addEventListener('mouseover', handleFighterHover);
    fighterCta.addEventListener('mouseout', handleFighterHoverExit);
    linkCtaFighter.addEventListener('mouseover', handleLinkOnCtaHover);
    linkCtaFighter.addEventListener('mouseout', handleLinkOnCtaExit);

    /* Dribbble CTA */
    dribbbleCta.addEventListener('mouseover', handleDribbbleHover);
    dribbbleCta.addEventListener('mouseout', handleDribbbleHoverExit);
    linkCtaDribbble.addEventListener('mouseover', handleLinkOnCtaHover);
    linkCtaDribbble.addEventListener('mouseout', handleLinkOnCtaExit);
});

