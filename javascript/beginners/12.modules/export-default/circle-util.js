export default function areaOfCircle(radius){
    if (typeof radius !== 'number'){
        throw new Error("radius is not a number");
    }
    return 3.14 * radius * radius;
}