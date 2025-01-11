'use client'
import ActionButton from "components/actionButton"
import styled from "styled-components"

const StyledHeaderImage = styled.div`
  background-image: 
    linear-gradient(to bottom, rgba(255, 255, 255, 0) 66%, var(--background-color) 90%), 
    url("/fox.jpg");
  background-size: cover;
  background-position: center;
  height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 128px;
`

const TagLineContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  max-width: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Hero = () => {
  return (
    <StyledHeaderImage>
      <TagLineContainer>
          <div>
          <h3>Welcome</h3>
          </div>
          <div>
          <p>We're a family-owned small business based in North Vancouver,</p> 
          <p>crafting cozy, nature-inspired night lights & décor. </p>
          <p>We create one-of-a-kind, handcrafted pieces that</p>
          <p>bring warmth and charm to your space.</p>
          </div>
          <div>
          <ActionButton>Shop Now</ActionButton>
          </div>
      </TagLineContainer>
    </StyledHeaderImage>
  )
  // return (
  //   <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
  //     <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
  //       <span>
  //         <Heading
  //           level="h1"
  //           className="text-3xl leading-10 text-ui-fg-base font-normal"
  //         >
  //           Ecommerce Starter Template
  //         </Heading>
  //         <Heading
  //           level="h2"
  //           className="text-3xl leading-10 text-ui-fg-subtle font-normal"
  //         >
  //           Powered by Medusa and Next.js
  //         </Heading>
  //       </span>
  //       <a
  //         href="https://github.com/medusajs/nextjs-starter-medusa"
  //         target="_blank"
  //       >
  //         <Button variant="secondary">
  //           View on GitHub
  //           <Github />
  //         </Button>
  //       </a>
  //     </div>
  //   </div>
  // )
}

export default Hero
