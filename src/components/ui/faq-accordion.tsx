'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn(
			'accordion-item bg-white rounded-md shadow-sm border-l-4 border-[#12b4a6] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-md mb-4 last:mb-0',
			className
		)}
		{...props}
	/>
));
CustomAccordionItem.displayName = 'CustomAccordionItem';

const CustomAccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'group flex flex-1 items-center justify-between gap-4 p-5 text-left focus-visible:outline-none',
				className
			)}
			{...props}
		>
			<h3 className="font-bold text-[#0b2b46] text-base md:text-lg pr-4 font-display">
				{children}
			</h3>
			<div className="flex-shrink-0 w-8 h-8 bg-[#12b4a6] rounded-full flex items-center justify-center text-white transition-transform group-data-[state=open]:rotate-180">
				<ChevronDown className="h-5 w-5 stroke-[2.5]" />
			</div>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

const CustomAccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(
			'overflow-hidden text-slate-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
			className
		)}
		{...props}
	>
		<div className="px-5 pb-5">
			<div className="text-[#334155] text-base leading-relaxed border-t border-slate-50 pt-4">
				{children}
			</div>
		</div>
	</AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = 'CustomAccordionContent';

export {
	CustomAccordion,
	CustomAccordionItem,
	CustomAccordionTrigger,
	CustomAccordionContent,
};

const faqs = [
	{
		question: 'Como funciona o curativo domiciliar do Doutor Feridas Home Care?',
		answer:
			'Nosso enfermeiro especialista em feridas vai até a sua casa com todos os insumos necessários, curativos avançados, laserterapia e equipamentos completos. Fazemos a avaliação inicial, criamos um protocolo personalizado e acompanhamos o paciente até a cicatrização completa. Você não precisa sair de casa em nenhum momento.',
	},
	{
		question: 'Quanto custa o atendimento domiciliar de feridas?',
		answer:
			'O valor varia de acordo com o tipo e complexidade da ferida, frequência das visitas e protocolo necessário. A avaliação inicial é gratuita, depois de avaliar o caso, apresentamos o plano de tratamento completo com os valores. Entre em contato pelo WhatsApp para saber mais.',
	},
	{
		question: 'Vocês atendem em qual região?',
		answer:
			'Atendemos em toda a região. Entre em contato informando seu bairro ou CEP que confirmamos a disponibilidade para o seu endereço. Nosso objetivo é levar o curativo domiciliar especializado ao maior número possível de pacientes.',
	},
	{
		question: 'O plano de saúde cobre o tratamento domiciliar de feridas?',
		answer:
			'Atualmente atendemos de forma particular. Emitimos nota fiscal para que você possa solicitar reembolso ao seu plano, dependendo da cobertura contratada. Consulte sua operadora sobre reembolso de atendimento domiciliar de enfermagem especializada.',
	},
	{
		question: 'Em quanto tempo consigo agendar o primeiro atendimento?',
		answer:
			'Entramos em contato em até 1 hora após o preenchimento do formulário ou mensagem no WhatsApp. Na maioria dos casos conseguimos agendar a primeira visita para o mesmo dia ou o próximo dia útil.',
	},
    {
		question: 'O curativo domiciliar funciona para feridas complexas como pé diabético e escara?',
		answer:
			'Sim, especialmente para feridas complexas como pé diabético, escara de decúbito, úlcera venosa crônica e feridas pós-cirúrgicas. Nosso protocolo foi desenvolvido pelo Doutor Feridas especificamente para tratar feridas crônicas de difícil cicatrização no domicílio do paciente, com acesso a tecnologia laser e curativos de alta performance.',
	},
];

export function AccordionComponent() {
	return (
		<section id="faq" className="px-4 sm:px-6 lg:px-8 py-20 lg:py-24 bg-[#f4f8fb] w-full flex flex-col items-center">
			<div className="max-w-4xl w-full mx-auto">
				<header className="text-center max-w-3xl mx-auto mb-12">
					<h2 className="text-[1.618rem] md:text-[2.25rem] lg:text-[2.618rem] font-bold mb-4 leading-tight text-[#0b2b46] font-display">
						Dúvidas sobre curativo domiciliar e <br className="hidden md:block"/> atendimento em casa
					</h2>
					<p className="text-[#334155] text-lg md:text-xl leading-relaxed">
						As perguntas mais frequentes de quem está considerando o tratamento de feridas em casa.
					</p>
				</header>

				<CustomAccordion
					type="single"
					collapsible
					className="w-full"
				>
					{faqs.map((faq, index) => (
						<CustomAccordionItem
							key={index}
							value={`item-${index}`}
						>
							<CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
							<CustomAccordionContent>{faq.answer}</CustomAccordionContent>
						</CustomAccordionItem>
					))}
				</CustomAccordion>
			</div>
		</section>
	);
}
