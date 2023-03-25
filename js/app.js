let bee = document.querySelector(`#bee`);
let red = document.querySelectorAll(`.red`);
let img = document.querySelectorAll(`img`);
let p = document.querySelectorAll(`p`);

bee[`style`][`borderRadius`] = `50%`;
bee[`style`][`marginTop`] = `30px`;

for(let i = 0; i < red.length; i++)
{
    red[i][`innerHTML`] = `HACKED`;
}

for(let i = 0; i < img.length; i++)
{
    img[i].setAttribute(`src`, `https://img.freepik.com/free-vector/matrix-style-binary-code-digital-background-with-falling-numbers_1017-25336.jpg?w=1480&t=st=1679758052~exp=1679758652~hmac=bcc3079bb357b4d1b326c27d7aa43b88d9e0cf75e3a5c6165bf994df2f7465e1`);
}

for(let i = 0; i < p.length; i++)
{
    if(p[i][`innerHTML`].includes(`link`) === true)
    {
        p[i].insertAdjacentHTML(`beforebegin`, `<a href="https://www.google.com/">`);
        
        p[i].insertAdjacentHTML(`afterend`, `</a>`);
    }
}
