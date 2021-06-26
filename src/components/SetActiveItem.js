function SetActiveItem(item, offset = 0) {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const section = document.getElementById(item);

    if (section !== null) {
        const rect = section.getBoundingClientRect();
        const element = rect.top + window.scrollY;

        if (Math.round(scroll) >= Math.round(element - offset)) {
            return true;
        }
    }

    return false;
}

export default SetActiveItem;