const randomCrector = (login: boolean): string => {
    const personIcon = [...Array(6)].map((_, idx) => `person_${idx + 1}`);
    const randomUserIcon = login
        ? 'adminPicture'
        : personIcon[Math.floor(Math.random() * personIcon.length)];

    return randomUserIcon;
};

export { randomCrector };
