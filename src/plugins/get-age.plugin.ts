
export const getAge = (birthdate: string) => {

    console.log({ currentYear: new Date().getFullYear() })

    if (!birthdate) return new Error('birthdate is required');

    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
