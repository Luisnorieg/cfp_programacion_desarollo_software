import { createSignal, type Component, type JSX } from 'solid-js';

interface Props {
initValue: number;
children?: JSX.Element;
}




export const Counter: Component<Props> = (props) => {
    
    const [ count, setCount] = createSignal(props.initValue);
    
    return (
            <>
            <div class="flex justify-between">
                {props.children}
                <h3 class="text-xl pt-3"> Value: {count()} </h3>
                    
            </div>
            <div class="flex justify-end items-center ">
                

                <button onclick={() => setCount(prev =>  ++ prev)} class="bg-blue-500 p-2 mr-2 rounded-md"> +1 </button>
                <button onclick={() => setCount(prev =>  -- prev)} class="bg-blue-500 p-2 mr-2 rounded-md"> -1 </button>
            
            </div>
                
            </>
        );
    };