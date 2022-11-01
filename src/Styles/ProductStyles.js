import styled from "styled-components";

export const ProductsContainer = styled.section`
padding: 0px 101px 0px 117px;
@media (max-width: 1024px) {
    padding: 0px 10px;
}
`
export const ProductsContainerLoading = styled.div`
padding: 0px 101px 0px 117px;
display: flex;
flex-direction: row;
justify-content: center;
min-height: 70vh;
align-items: center;
font-size: 5rem;
font-weight: bolder;
@media (max-width: 768px) {
    font-size: 2rem;
}
`
export const ProductWrapper = styled.div`
display: grid;
grid-gap:40px;
grid-template-columns: repeat(3, 1fr);
@media (max-width: 1200px) {
    grid-template-columns: 1fr minmax(50%, 1fr)
}
@media (max-width: 768px) {
    display: flex;    
    width: 100%;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`
export const ProductsHeader = styled.h1`
padding:40px 0 60px;
font-weight: 400;
font-size: 42px;
line-height: 160%;
text-transform: capitalize; 
`
export const ProductCard = styled.div`
position: relative;
padding:16px;
opacity: ${props => props.opacity};
&:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
}
&:hover .onHover {
    opacity: 1;
}
@media (max-width: 1024px) {  

}
`

export const ProductCardImage = styled.img`
width:100%;
height:330px;
object-fit: contain;
@media (max-width: 1024px) {
    width:100%;
    height:330px;
  } 
`

export const ProductCardContent = styled.h1`
padding:24px 0 0 0;
width:354px;
font-weight: 300;
font-size: 18px;
line-height: 160%;
color: var(--c-text);
`
export const ProductCardContentTwo = styled.h1`
width:354px;
font-weight: 500;
font-size: 18px;
line-height: 160%;
color: var(--c-text);
`
export const ProductCardOverlauy = styled.div`
position: absolute;
left:50%;
top:50%;
transform: translate(-50%, -50%);
`
export const ProductInStock = styled.h1`
position: relative;
color: var(--c-text-two);
font-size: 24px;
font-weight: 400;
line-height: 160%;
`
export const CartAddOverlay = styled.div`
position: absolute;
bottom:72px;
right:31px;
`
export const CartAdd = styled.img`
opacity: 0;
z-index: 2;
`