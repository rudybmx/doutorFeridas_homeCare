'use client';

import * as React from 'react';
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('', className)}
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
				'group flex flex-1 items-center justify-between gap-4 rounded-2xl p-4 text-left',
				'bg-[#ffff] transition-all hover:bg-gray-50/70 hover:shadow-md',
				'focus-visible:outline-none focus-visible:ring-2',
				'data-[state=open]:shadow-md border border-slate-200',
				className
			)}
			{...props}
		>
			<div className="flex items-center gap-4">
				<span className="text-lg font-bold text-slate-900 tracking-wide">
					{children}
				</span>
			</div>
			<div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform group-hover:scale-105 group-data-[state=open]:rotate-180 border border-brand-200">
				<ChevronDown className="h-4 w-4" />
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
			'overflow-hidden text-slate-600',
			'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2',
			className
		)}
		{...props}
	>
		<div className="mt-2">
			<div className="flex items-start gap-4 rounded-2xl bg-[#ffff] p-4 transition-all border border-slate-100 border-t-0 rounded-t-none -mt-4 pt-6">
				<span className="flex-1 text-base leading-relaxed">{children}</span>
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
			'Nosso enfermeiro especialista em feridas vai até a sua casa em [Cidade] com todos os insumos necessários — curativos avançados, laserterapia e equipamentos completos. Fazemos a avaliação inicial, criamos um protocolo personalizado e acompanhamos o paciente até a cicatrização completa. Você não precisa sair de casa em nenhum momento.',
	},
	{
		question: 'Quanto custa o atendimento domiciliar de feridas?',
		answer:
			'O valor varia de acordo com o tipo e complexidade da ferida, frequência das visitas e protocolo necessário. A avaliação inicial é gratuita — depois de avaliar o caso, apresentamos o plano de tratamento completo com os valores. Entre em contato pelo WhatsApp para saber mais.',
	},
	{
		question: 'Vocês atendem em qual parte de [Cidade]?',
		answer:
			'Atendemos em [Cidade] e região. Entre em contato informando seu bairro ou CEP que confirmamos a disponibilidade para o seu endereço. Nosso objetivo é levar o curativo domiciliar especializado ao maior número possível de pacientes.',
	},
	{
		question: 'O plano de saúde cobre o tratamento domiciliar de feridas?',
		answer:
			'Atualmente atendemos de forma particular. Emitimos nota fiscal para que você possa solicitar reembolso ao seu plano, dependendo da cobertura contratada. Consulte sua operadora sobre reembolso de atendimento domiciliar de enfermagem especializada.',
	},
	{
		question: 'Em quanto tempo consigo agendar o primeiro atendimento?',
		answer:
			'Entramos em contato em até 1 hora após o preenchimento do formulário ou mensagem no WhatsApp. Na maioria dos casos conseguimos agendar a primeira visita para o mesmo dia ou o próximo dia útil em [Cidade].',
	},
    {
		question: 'O curativo domiciliar funciona para feridas complexas como pé diabético e escara?',
		answer:
			'Sim — especialmente para feridas complexas como pé diabético, escara de decúbito, úlcera venosa crônica e feridas pós-cirúrgicas. Nosso protocolo foi desenvolvido pelo Dr. Evandro Reis especificamente para tratar feridas crônicas de difícil cicatrização no domicílio do paciente, com acesso a tecnologia laser e curativos de alta performance.',
	},
];

export function AccordionComponent() {
	return (
		<section id="faq" className="px-6 md:px-10 py-32 lg:py-40 bg-slate-50 w-full">
			<div className="max-w-3xl w-full mx-auto">
                <div className="mb-12 text-center">
                    <div className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">
                        TIRE SUAS DÚVIDAS
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 tracking-tight font-display">
                        Dúvidas sobre curativo domiciliar e atendimento em casa
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                        As perguntas mais frequentes de quem está considerando o <strong>tratamento de feridas em casa</strong>.
                    </p>
                </div>

				<CustomAccordion
					type="single"
					collapsible
					defaultValue="item-0"
					className="space-y-4"
				>
					{faqs.map((faq, index) => (
						<CustomAccordionItem
							key={index}
							value={`item-${index}`}
						>
							<CustomAccordionTrigger className="data-[state=open]:border-brand-500 data-[state=open]:rounded-b-none">{faq.question}</CustomAccordionTrigger>
							<CustomAccordionContent className="border-x border-b border-brand-500 rounded-b-2xl">{faq.answer}</CustomAccordionContent>
						</CustomAccordionItem>
					))}
				</CustomAccordion>
			</div>
		</section>
	);
}
