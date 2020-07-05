import * as React from "react";
import {
	Character,
	calcStatBlock,
	StatData,
	bonusDescStr,
	BonusDescriptor,
} from "../../store/state/character";
import { Stat, StatFullNames } from "../../data/stats";

const StatHeader = (props: { stat: Stat }) => (
	<div className="subcell centered" title={StatFullNames[props.stat]}>
		{props.stat}
	</div>
);

const StatValue = (props: { stat: Stat; data: StatData }) => {
	const bonuses: BonusDescriptor[] = [];
	if (props.data.racial > 0) {
		bonuses.push({ bonus: props.data.racial, desc: "racial base" });
	}
	if (props.data.roll > 0) {
		if (props.data.shallyasMercy) {
			bonuses.push({
				bonus: 11,
				desc: `from Shallya's Mercy (${props.data.roll} from original roll)`,
			});
		} else {
			bonuses.push({ bonus: props.data.roll, desc: "from roll" });
		}
	}
	const bonusStr = bonusDescStr([...bonuses, ...props.data.bonuses]);
	const sitBonusStr =
		props.data.sitBonuses.length > 0
			? `\nSituational Bonuses:\n${bonusDescStr(props.data.sitBonuses)}`
			: "";
	return (
		<div
			className="cell centered"
			title={
				`${StatFullNames[props.stat]}\n` +
				bonusStr +
				`${props.data.total} total\n` +
				sitBonusStr
			}
		>
			{props.data.total}
		</div>
	);
};

export function StatsSection(props: { char: Character }) {
	const stats = calcStatBlock(props.char);
	return (
		<div className="flexcol block">
			<div className="header">CHARACTER PROFILE</div>
			<div className="flexrow cell">
				<StatHeader stat="WS" />
				<StatHeader stat="BS" />
				<StatHeader stat="S" />
				<StatHeader stat="T" />
				<StatHeader stat="Ag" />
				<StatHeader stat="Int" />
				<StatHeader stat="WP" />
				<StatHeader stat="Fel" />
			</div>
			<div className="flexrow">
				<StatValue stat="WS" data={stats.WS} />
				<StatValue stat="BS" data={stats.BS} />
				<StatValue stat="S" data={stats.S} />
				<StatValue stat="T" data={stats.T} />
				<StatValue stat="Ag" data={stats.Ag} />
				<StatValue stat="Int" data={stats.Int} />
				<StatValue stat="WP" data={stats.WP} />
				<StatValue stat="Fel" data={stats.Fel} />
			</div>
			<div className="flexrow cell">
				<StatHeader stat="A" />
				<StatHeader stat="W" />
				<StatHeader stat="SB" />
				<StatHeader stat="TB" />
				<StatHeader stat="MV" />
				<StatHeader stat="Mag" />
				<StatHeader stat="IP" />
				<StatHeader stat="FP" />
			</div>
			<div className="flexrow">
				<StatValue stat="A" data={stats.A} />
				<StatValue stat="W" data={stats.W} />
				<StatValue stat="SB" data={stats.SB} />
				<StatValue stat="TB" data={stats.TB} />
				<StatValue stat="MV" data={stats.MV} />
				<StatValue stat="Mag" data={stats.Mag} />
				<StatValue stat="IP" data={stats.IP} />
				<StatValue stat="FP" data={stats.FP} />
			</div>
		</div>
	);
}
