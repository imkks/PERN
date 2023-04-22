export class MyError extends Error
{
        constructor(status,...params)
        {
            super(...params)
            this.status=status;
        }
}